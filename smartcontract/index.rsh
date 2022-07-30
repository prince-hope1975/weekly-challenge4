"reach 0.1";
const shared = {
  countDownTime: Fun([UInt], Null),
  showOutcome: Fun([Bool], Null),
};
const amt = 5000000000;
export const main = Reach.App(() => {
  const A = Participant("Alice", {
    activateSwitch: Fun([], Bool),
    ready: Fun([], Null),
    token: Token,
    ...shared,
  });
  const C = API("Charles", {
    joinBenefactor: Fun([], Bool),
    inform: Fun([], Bool),
  });
  const B = Participant("Bob", {
    // Specify Bob's interact interface here
    ...shared,
  });
  const V = View("time", {
    seeTime: UInt,
  });
  // Application initialization
  init();
  const count = 200;
  const informTimeout = () => {
    each([A, B], () => {
      interact.countDownTime(count);
    });
  };
  A.only(() => {
    const token = declassify(interact.token);
  });
  A.publish(token);
  commit();
  A.pay([[amt, token]]);
  const list = new Map(UInt);

  A.interact.ready();

  const [timeLeft, users, total, Benefactors, endit] = parallelReduce([
    lastConsensusTime() + count,
    0,
    0,
    Array.replicate(3, A),
    false,
  ])
    .invariant(balance() == total)
    .define(() => {
      V.seeTime.set(timeLeft);
    })
    .while(!endit && lastConsensusTime() < timeLeft)
    .case(
      A,
      () => ({
        when: users == 3,
      }),
      (_) => {
        commit();
        A.only(() => {
          const endContract = !declassify(interact.activateSwitch());
        });
        A.publish(endContract).timeout(relativeTime(count), () =>
          closeTo(A, informTimeout, [[balance(token), token]])
        );
        each([B, A], () => {
          interact.showOutcome(endContract);
        });
        const contractFate = endContract
          ? lastConsensusTime()
          : count + lastConsensusTime();

        return [contractFate, users, total, Benefactors, endContract];
      }
    )
    .api(
      C.joinBenefactor,
      () => {
        check(isNone(list[this]), "Already a benefactor");
        check(users <= 3, "Limit Exceeded cannot register in benefactor list");
      },
      () => 0,
      (k) => {
        const new_benefactor_arr = Benefactors.set(users % 3, this);
        list[this] = 0;
        k(true);
        return [timeLeft, users + 1, total, new_benefactor_arr, endit];
      }
    )
    .timeout(relativeTime(5000), () => {
      const [[], k] = call(C.inform);
      k(false);
      return [timeLeft, users + 1, total, Benefactors, endit];
    });
  Benefactors.forEach((Acc) => {
    transfer(balance(token) / 5, token).to(Acc);
  });
  transfer(balance(token), token).to(A);
  transfer(balance()).to(A);
  commit();
  exit();
});
