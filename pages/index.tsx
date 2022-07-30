import React, { useEffect, useState } from "react";
import * as backend from "../smartcontract/build/index.main.mjs";
import {
  loadStdlib,
  ALGO_WalletConnect as WalletConnect,
  ALGO_MyAlgoConnect as myAlgo,
} from "@reach-sh/stdlib";
import { useCustomContext } from "../context";
import { ImSpinner2 } from "react-icons/im";
const assetId = { _hex: "0x05f2353e", _isBigNumber: true };
const contractInfo = { _hex: "0x0612dd15", _isBigNumber: true };
const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));

reach.setWalletFallback(
  reach.walletFallback({
    providerEnv: "TestNet",
    WalletConnect,
  })
);

const App = () => {
  useEffect(() => {
    const whitelistSpot = window.localStorage.getItem("whitelistSpot");
    if (!whitelistSpot) {
      window.localStorage.setItem("whitelistSpot", "?");
    }
    const spot = window.localStorage.getItem("whitelistSpot");
    setSpot(spot);
  }, []);
  const [wallet, setWallet] = useState({} as any);
  const [token, setToken] = useState();
  const [mySpot, setSpot] = useState(("" as string) || null);
  const [isConnected, setIsConnected] = useState(false);
  const { setModalMessage, setShowModal } = useCustomContext();
  const [role, setRole] = useState("Attacher");
  const displayMessage = (show: boolean, message?: string | JSX.Element) => {
    setShowModal(show);
    setModalMessage(message);
  };
  const shared = (acc: any) => {
    return {
      countDownTime: (count: string) => {
        console.log("Timeout was encountered", parseInt(count));
      },
      showOutcome: (outcome: boolean) => {
        role == "Attacher" ? console.log(reach.formatAddress(acc)) : "";

        console.log(
          `Inheritance is with ${
            outcome
              ? "Attacher" == role
                ? "You"
                : "Attacher"
              : "Deployer" == role
              ? "You"
              : "Deployer"
          }`
        );
      },
    };
  };
  const deploy = async () => {
    const ctcDeployer = wallet?.contract(backend);
    try {
      await Promise.all([
        // @ts-ignore

        backend.Alice(ctcDeployer, {
          token: 101899239,
          ready: async () => {
            console.log(
              `Contract info: ${JSON.stringify(await ctcDeployer.getInfo())}`
            );
          },
          activateSwitch: async () => {
            const v = await ctcDeployer.v.time.seeTime();
            console.log(reach.bigNumberToNumber(v[1]));
            return true;
          },
          ...shared(wallet),
        }),
      ]);
      console.log(await ctcDeployer.getInfo());
    } catch (error) {
      if (error !== 42) console.log(error);
      console.log(await ctcDeployer.getInfo());
    }
    console.log(await ctcDeployer.getInfo());
  };

  // Launch testnet token
  const createToken = async () => {
    const token = await reach.launchToken(wallet, "Reach", "RCH");
    setToken(token);
    console.log(token);
  };

  const joinBenefactor = async () => {
    try {
      console.log("Attaching to contract");
      displayMessage(true, <Loading text="opting into asset Please wait" />);
      // @ts-ignore
      const optin = await wallet.tokenAccept(reach.bigNumberToNumber(assetId));
      displayMessage(false);
      const ctc = wallet.contract(
        backend,
        reach.bigNumberToNumber(contractInfo)
      );

      try {
        await Promise.all([
          backend.Bob(ctc, {
            acceptTerms: async () => {
              return true;
            },
            countDownTime: (count: any) => {
              console.log("Timeout was encountered", parseInt(count));
              displayMessage(
                true,
                <Loading
                  text={`"Timeout was encountered", ${parseInt(count)}`}
                />
              );
            },
            showOutcome: (outcome: boolean) => {
              role == "Attacher"
                ? console.log(reach.formatAddress(wallet))
                : "";

              displayMessage(
                true,
                <Loading
                  text={`Inheritance is with ${
                    outcome
                      ? "Attacher" == role
                        ? "You"
                        : "Attacher"
                      : "Deployer" == role
                      ? "You"
                      : "Deployer"
                  }`}
                />
              );
            },
          }),
        ]);
      } catch (error) {
        console.log(error);
      }

      displayMessage(
        true,
        <Loading text="checking if you can be benefactor" />
      );

      const res = await ctc.apis.Charles.joinBenefactor();
      console.log(res, "successful");
      console.log(
        "\nBalance in wallet",
        // @ts-ignore
        reach.formatCurrency(await reach.balanceOf(wallet)),
        "Algo\n"
      );
      displayMessage(true, <Loading text="Successfully joined" />);
      setSpot(accc);
    } catch (error) {
      displayMessage(
        true,
        <Loading error text="An error occured, Unable to join" />
      );

      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const acct = await reach.getDefaultAccount();
      setWallet(acct);
      setIsConnected(true);
      console.log(acct);
    } catch (e) {
      console.log(e);
    }
  };
  const Loading = ({ text, error }: { text: string; error?: boolean }) => {
    return (
      <div
        className={`flex flex-col items-center gap-4 w-full h-full p-3 ${
          error ? "bg-red-500 rounded text-white" : ""
        }`}
      >
        <ImSpinner2 className="animate-spin  text-2xl" />
        {text}
      </div>
    );
  };

  return (
    <div className="w-screen  h-screen bg-gray-100 flex gap-4">
      <header className="w-full h-[4rem] p-2 left-0 m-0 bg-black shadow-md flex items-center  fixed bg-gradient-to-l from-black  to-white justify-between text-white text-lg uppercase cursor-pointer ">
        <img
          src="data:image/jpeg;base64,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"
          alt="skull"
          className="w-14 h-14 "
        />
        {isConnected ? (
          <div className="bg-white text-purple-700 py-2 px-3 hover:bg-slate-100  rounded shadow-sm">
          Join now{" "}
          </div>
        ) : (
          <div
            onClick={connectWallet}
            className="bg-white text-gray-700 py-2 px-3 hover:bg-slate-100  rounded shadow-sm"
          >
            Connect{" "}
          </div>
        )}
      </header>
      <div
        className="w-full h-full flex flex-col items-center justify-center bg-center bg-cover gap-14"
        style={{
          backgroundImage: `url("data:image/jpeg;base64,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")`,
        }}
      >
        <div className="mx-3 text-purple-800 text-xl h-40 flex items-center px-5 rounded-md shadow-xl bg-white/70 backdrop-blur-sm capitalize">
          {" "}
          {mySpot} / 3 benefactors left
        </div>
        <button
          className="p-3 rounded text-white font-bold text-lg animate-bounce bg-gradient-to-r from-black to-gray-500 hover:from-white hover:to-gray-500 hover:text-gray-900"
          onClick={async () => joinBenefactor()}
          // onClick={whitelist}
        >
          Click here benefactors
        </button>
      </div>
    </div>
  );
};

export default App;
