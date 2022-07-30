// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const map0_ctc = ctc8;
  
  
  return {
    infos: {
      time: {
        seeTime: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v454, v455, v456, v463] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v454, v455, v484, v485, v486, v488, v489, v495, v496, v508] = svs;
              return (await ((async () => {
                
                
                return v486;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v454, v455, v484, v486, v488, v495, v496, v536, v552, v555] = svs;
              return (await ((async () => {
                
                
                return v486;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc5],
      4: [ctc0, ctc1, ctc6, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2, ctc2],
      5: [ctc0, ctc1, ctc6, ctc2, ctc2, ctc5, ctc2, ctc2, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    Alice0_65: ctc0,
    Charles_joinBenefactor0_65: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v446 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v447 = [v446];
  const v451 = stdlib.protect(ctc3, interact.token, 'for Alice\'s interact field token');
  
  const txn1 = await (ctc.sendrecv({
    args: [v451],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v455], secs: v457, time: v456, didSend: v27, from: v454 } = txn1;
      
      const v458 = v447[stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '0')];
      const v460 = v458[stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '1')];
      const v461 = v458[stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '2')];
      const v462 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v460, v461];
      const v463 = stdlib.Array_set(v447, stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '0'), v462);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v455
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v455], secs: v457, time: v456, didSend: v27, from: v454 } = txn1;
  const v458 = v447[stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '0')];
  const v460 = v458[stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '1')];
  const v461 = v458[stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '2')];
  const v462 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v460, v461];
  const v463 = stdlib.Array_set(v447, stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '0'), v462);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v454, v455, v456, v463],
    evt_cnt: 0,
    funcNum: 1,
    lct: v456,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:6:13:decimal', stdlib.UInt_max, '5000000000'), v455]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v467, time: v466, didSend: v34, from: v465 } = txn2;
      
      ;
      const v468 = v463[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0')];
      const v469 = v468[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0')];
      const v470 = stdlib.add(v469, stdlib.checkedBigNumberify('./index.rsh:6:13:decimal', stdlib.UInt_max, '5000000000'));
      const v473 = v468[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '1')];
      const v474 = v468[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '2')];
      const v475 = [v470, v473, v474];
      const v476 = stdlib.Array_set(v463, stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0'), v475);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:6:13:decimal', stdlib.UInt_max, '5000000000'),
        kind: 'to',
        tok: v455
        });
      
      const v480 = stdlib.add(v456, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '200'));
      const v482 = [v454, v454, v454];
      const v484 = v482;
      const v485 = false;
      const v486 = v480;
      const v488 = stdlib.checkedBigNumberify('./index.rsh:45:5:decimal', stdlib.UInt_max, '0');
      const v489 = v466;
      const v490 = v456;
      const v495 = v476;
      const v496 = stdlib.checkedBigNumberify('./index.rsh:26:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v500 = stdlib.lt(v490, v486);
        const v501 = v485 ? v500 : false;
        
        return v501;})()) {
        const v508 = stdlib.add(v489, stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '5000'));
        sim_r.isHalt = false;
        }
      else {
        const v711 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '0')];
        const v712 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '1')];
        const v713 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '2')];
        const v714 = v495[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v715 = v714[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v716 = stdlib.div(v715, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
        const v722 = stdlib.sub(v715, v716);
        const v725 = v714[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
        const v726 = v714[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
        const v727 = [v722, v725, v726];
        const v728 = stdlib.Array_set(v495, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v727);
        sim_r.txns.push({
          kind: 'from',
          to: v711,
          tok: v455
          });
        const v730 = v728[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v731 = v730[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v732 = stdlib.div(v731, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
        const v738 = stdlib.sub(v731, v732);
        const v741 = v730[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
        const v742 = v730[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
        const v743 = [v738, v741, v742];
        const v744 = stdlib.Array_set(v728, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v743);
        sim_r.txns.push({
          kind: 'from',
          to: v712,
          tok: v455
          });
        const v746 = v744[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v747 = v746[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v748 = stdlib.div(v747, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
        const v754 = stdlib.sub(v747, v748);
        const v757 = v746[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
        const v758 = v746[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
        const v759 = [v754, v757, v758];
        const v760 = stdlib.Array_set(v744, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v759);
        sim_r.txns.push({
          kind: 'from',
          to: v713,
          tok: v455
          });
        const v762 = v760[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
        const v763 = v762[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v454,
          tok: v455
          });
        sim_r.txns.push({
          kind: 'from',
          to: v454,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v455
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc3, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v467, time: v466, didSend: v34, from: v465 } = txn2;
  ;
  const v468 = v463[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0')];
  const v469 = v468[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0')];
  const v470 = stdlib.add(v469, stdlib.checkedBigNumberify('./index.rsh:6:13:decimal', stdlib.UInt_max, '5000000000'));
  const v473 = v468[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '1')];
  const v474 = v468[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '2')];
  const v475 = [v470, v473, v474];
  const v476 = stdlib.Array_set(v463, stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0'), v475);
  ;
  const v477 = stdlib.addressEq(v454, v465);
  stdlib.assert(v477, {
    at: './index.rsh:38:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:41:19:application',
    fs: ['at ./index.rsh:41:19:application call to [unknown function] (defined at: ./index.rsh:41:19:function exp)', 'at ./index.rsh:41:19:application call to "liftedInteract" (defined at: ./index.rsh:41:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const v480 = stdlib.add(v456, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '200'));
  const v482 = [v454, v454, v454];
  let v484 = v482;
  let v485 = false;
  let v486 = v480;
  let v488 = stdlib.checkedBigNumberify('./index.rsh:45:5:decimal', stdlib.UInt_max, '0');
  let v489 = v466;
  let v490 = v456;
  let v495 = v476;
  let v496 = stdlib.checkedBigNumberify('./index.rsh:26:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v500 = stdlib.lt(v490, v486);
    const v501 = v485 ? v500 : false;
    
    return v501;})()) {
    const v508 = stdlib.add(v489, stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '5000'));
    const v512 = stdlib.eq(v488, stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '3'));
    const v515 = ['Alice0_65', null];
    
    const txn3 = await (ctc.sendrecv({
      args: [v454, v455, v484, v485, v486, v488, v489, v495, v496, v508, v515],
      evt_cnt: 1,
      funcNum: 3,
      lct: v489,
      onlyIf: v512,
      out_tys: [ctc5],
      pay: [stdlib.checkedBigNumberify('./index.rsh:55:10:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [v535], secs: v537, time: v536, didSend: v198, from: v534 } = txn3;
        
        switch (v535[0]) {
          case 'Alice0_65': {
            const v538 = v535[1];
            ;
            const v552 = stdlib.add(v536, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '200'));
            const v554 = v495[stdlib.checkedBigNumberify('./index.rsh:66:46:application', stdlib.UInt_max, '0')];
            const v555 = v554[stdlib.checkedBigNumberify('./index.rsh:66:46:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            
            break;
            }
          case 'Charles_joinBenefactor0_65': {
            const v617 = v535[1];
            sim_r.txns.push({
              kind: 'api',
              who: "Charles_joinBenefactor"
              });
            ;
            const v685 = stdlib.mod(v488, stdlib.checkedBigNumberify('./index.rsh:86:60:decimal', stdlib.UInt_max, '3'));
            const v687 = stdlib.Array_set(v484, v685, v534);
            await stdlib.simMapSet(sim_r, 0, v534, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, '0'));
            const v688 = true;
            await txn3.getOutput('Charles_joinBenefactor', 'v688', ctc6, v688);
            const v694 = stdlib.add(v488, stdlib.checkedBigNumberify('./index.rsh:89:35:decimal', stdlib.UInt_max, '1'));
            const cv484 = v687;
            const cv485 = v485;
            const cv486 = v486;
            const cv488 = v694;
            const cv489 = v536;
            const cv490 = v489;
            const cv495 = v495;
            const cv496 = v496;
            
            await (async () => {
              const v484 = cv484;
              const v485 = cv485;
              const v486 = cv486;
              const v488 = cv488;
              const v489 = cv489;
              const v490 = cv490;
              const v495 = cv495;
              const v496 = cv496;
              
              if (await (async () => {
                const v500 = stdlib.lt(v490, v486);
                const v501 = v485 ? v500 : false;
                
                return v501;})()) {
                const v508 = stdlib.add(v489, stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '5000'));
                sim_r.isHalt = false;
                }
              else {
                const v711 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '0')];
                const v712 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '1')];
                const v713 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '2')];
                const v714 = v495[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
                const v715 = v714[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
                const v716 = stdlib.div(v715, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
                const v722 = stdlib.sub(v715, v716);
                const v725 = v714[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
                const v726 = v714[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
                const v727 = [v722, v725, v726];
                const v728 = stdlib.Array_set(v495, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v727);
                sim_r.txns.push({
                  kind: 'from',
                  to: v711,
                  tok: v455
                  });
                const v730 = v728[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
                const v731 = v730[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
                const v732 = stdlib.div(v731, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
                const v738 = stdlib.sub(v731, v732);
                const v741 = v730[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
                const v742 = v730[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
                const v743 = [v738, v741, v742];
                const v744 = stdlib.Array_set(v728, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v743);
                sim_r.txns.push({
                  kind: 'from',
                  to: v712,
                  tok: v455
                  });
                const v746 = v744[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
                const v747 = v746[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
                const v748 = stdlib.div(v747, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
                const v754 = stdlib.sub(v747, v748);
                const v757 = v746[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
                const v758 = v746[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
                const v759 = [v754, v757, v758];
                const v760 = stdlib.Array_set(v744, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v759);
                sim_r.txns.push({
                  kind: 'from',
                  to: v713,
                  tok: v455
                  });
                const v762 = v760[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
                const v763 = v762[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v454,
                  tok: v455
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v454,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v455
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            break;
            }
          }
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v508],
      tys: [ctc7, ctc3, ctc8, ctc6, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc5],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v700], secs: v702, time: v701, didSend: v299, from: v699 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v703 = false;
      await txn4.getOutput('Charles_inform', 'v703', ctc6, v703);
      const v708 = stdlib.add(v488, stdlib.checkedBigNumberify('./index.rsh:95:33:decimal', stdlib.UInt_max, '1'));
      const cv484 = v484;
      const cv485 = v485;
      const cv486 = v486;
      const cv488 = v708;
      const cv489 = v701;
      const cv490 = v489;
      const cv495 = v495;
      const cv496 = v496;
      
      v484 = cv484;
      v485 = cv485;
      v486 = cv486;
      v488 = cv488;
      v489 = cv489;
      v490 = cv490;
      v495 = cv495;
      v496 = cv496;
      
      continue;
      }
    else {
      const {data: [v535], secs: v537, time: v536, didSend: v198, from: v534 } = txn3;
      switch (v535[0]) {
        case 'Alice0_65': {
          const v538 = v535[1];
          ;
          const v545 = stdlib.addressEq(v534, v454);
          stdlib.assert(v545, {
            at: './index.rsh:43:70:application',
            fs: [],
            msg: null,
            who: 'Alice'
            });
          const v552 = stdlib.add(v536, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '200'));
          const v554 = v495[stdlib.checkedBigNumberify('./index.rsh:66:46:application', stdlib.UInt_max, '0')];
          const v555 = v554[stdlib.checkedBigNumberify('./index.rsh:66:46:application', stdlib.UInt_max, '0')];
          const v558 = stdlib.protect(ctc6, await interact.activateSwitch(), {
            at: './index.rsh:63:66:application',
            fs: ['at ./index.rsh:62:15:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)', 'at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:11:function exp)'],
            msg: 'activateSwitch',
            who: 'Alice'
            });
          const v559 = v558 ? false : true;
          
          const txn4 = await (ctc.sendrecv({
            args: [v454, v455, v484, v486, v488, v495, v496, v536, v552, v555, v559],
            evt_cnt: 1,
            funcNum: 5,
            lct: v536,
            onlyIf: true,
            out_tys: [ctc6],
            pay: [stdlib.checkedBigNumberify('./index.rsh:65:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              
              const {data: [v561], secs: v563, time: v562, didSend: v213, from: v560 } = txn4;
              
              ;
              
              const v571 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '200'), v536);
              const v572 = v561 ? v536 : v571;
              const cv484 = v484;
              const cv485 = v561;
              const cv486 = v572;
              const cv488 = v488;
              const cv489 = v562;
              const cv490 = v536;
              const cv495 = v495;
              const cv496 = v496;
              
              await (async () => {
                const v484 = cv484;
                const v485 = cv485;
                const v486 = cv486;
                const v488 = cv488;
                const v489 = cv489;
                const v490 = cv490;
                const v495 = cv495;
                const v496 = cv496;
                
                if (await (async () => {
                  const v500 = stdlib.lt(v490, v486);
                  const v501 = v485 ? v500 : false;
                  
                  return v501;})()) {
                  const v508 = stdlib.add(v489, stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '5000'));
                  sim_r.isHalt = false;
                  }
                else {
                  const v711 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '0')];
                  const v712 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '1')];
                  const v713 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '2')];
                  const v714 = v495[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
                  const v715 = v714[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
                  const v716 = stdlib.div(v715, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
                  const v722 = stdlib.sub(v715, v716);
                  const v725 = v714[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
                  const v726 = v714[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
                  const v727 = [v722, v725, v726];
                  const v728 = stdlib.Array_set(v495, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v727);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v711,
                    tok: v455
                    });
                  const v730 = v728[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
                  const v731 = v730[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
                  const v732 = stdlib.div(v731, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
                  const v738 = stdlib.sub(v731, v732);
                  const v741 = v730[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
                  const v742 = v730[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
                  const v743 = [v738, v741, v742];
                  const v744 = stdlib.Array_set(v728, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v743);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v712,
                    tok: v455
                    });
                  const v746 = v744[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
                  const v747 = v746[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
                  const v748 = stdlib.div(v747, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
                  const v754 = stdlib.sub(v747, v748);
                  const v757 = v746[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
                  const v758 = v746[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
                  const v759 = [v754, v757, v758];
                  const v760 = stdlib.Array_set(v744, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v759);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v713,
                    tok: v455
                    });
                  const v762 = v760[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
                  const v763 = v762[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v454,
                    tok: v455
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v454,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v455
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v552],
            tys: [ctc7, ctc3, ctc8, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc1, ctc6],
            waitIfNotPresent: false
            }));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.sendrecv({
              args: [v454, v455, v484, v486, v488, v495, v496, v536, v552, v555],
              evt_cnt: 0,
              funcNum: 6,
              lct: v536,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn5) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                stdlib.simMapDupe(sim_r, 0, map0);
                
                const {data: [], secs: v577, time: v576, didSend: v242, from: v575 } = txn5;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v454,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v454,
                  tok: v455
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v455
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc7, ctc3, ctc8, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc1],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v577, time: v576, didSend: v242, from: v575 } = txn5;
            ;
            ;
            ;
            stdlib.protect(ctc0, await interact.countDownTime(stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '200')), {
              at: './index.rsh:30:29:application',
              fs: ['at ./index.rsh:29:9:application call to [unknown function] (defined at: ./index.rsh:29:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:28:28:function exp)', 'at ./index.rsh:66:18:application call to "closeTo" (defined at: reach standard library:198:8:function exp)', 'at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:11:function exp)'],
              msg: 'countDownTime',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v561], secs: v563, time: v562, didSend: v213, from: v560 } = txn4;
            ;
            const v564 = stdlib.addressEq(v454, v560);
            stdlib.assert(v564, {
              at: './index.rsh:65:11:dot',
              fs: ['at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:11:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            stdlib.protect(ctc0, await interact.showOutcome(v561), {
              at: './index.rsh:69:31:application',
              fs: ['at ./index.rsh:68:13:application call to [unknown function] (defined at: ./index.rsh:68:25:function exp)', 'at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:11:function exp)'],
              msg: 'showOutcome',
              who: 'Alice'
              });
            
            const v571 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '200'), v536);
            const v572 = v561 ? v536 : v571;
            const cv484 = v484;
            const cv485 = v561;
            const cv486 = v572;
            const cv488 = v488;
            const cv489 = v562;
            const cv490 = v536;
            const cv495 = v495;
            const cv496 = v496;
            
            v484 = cv484;
            v485 = cv485;
            v486 = cv486;
            v488 = cv488;
            v489 = cv489;
            v490 = cv490;
            v495 = cv495;
            v496 = cv496;
            
            continue;}
          
          
          break;
          }
        case 'Charles_joinBenefactor0_65': {
          const v617 = v535[1];
          undefined /* setApiDetails */;
          ;
          const v685 = stdlib.mod(v488, stdlib.checkedBigNumberify('./index.rsh:86:60:decimal', stdlib.UInt_max, '3'));
          const v687 = stdlib.Array_set(v484, v685, v534);
          await stdlib.mapSet(map0, v534, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, '0'));
          const v688 = true;
          await txn3.getOutput('Charles_joinBenefactor', 'v688', ctc6, v688);
          const v694 = stdlib.add(v488, stdlib.checkedBigNumberify('./index.rsh:89:35:decimal', stdlib.UInt_max, '1'));
          const cv484 = v687;
          const cv485 = v485;
          const cv486 = v486;
          const cv488 = v694;
          const cv489 = v536;
          const cv490 = v489;
          const cv495 = v495;
          const cv496 = v496;
          
          v484 = cv484;
          v485 = cv485;
          v486 = cv486;
          v488 = cv488;
          v489 = cv489;
          v490 = cv490;
          v495 = cv495;
          v496 = cv496;
          
          continue;
          break;
          }
        }}
    
    }
  const v711 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '0')];
  const v712 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '1')];
  const v713 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '2')];
  const v714 = v495[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
  const v715 = v714[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
  const v716 = stdlib.div(v715, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
  const v722 = stdlib.sub(v715, v716);
  const v725 = v714[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
  const v726 = v714[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
  const v727 = [v722, v725, v726];
  const v728 = stdlib.Array_set(v495, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v727);
  ;
  const v730 = v728[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
  const v731 = v730[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
  const v732 = stdlib.div(v731, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
  const v738 = stdlib.sub(v731, v732);
  const v741 = v730[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
  const v742 = v730[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
  const v743 = [v738, v741, v742];
  const v744 = stdlib.Array_set(v728, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v743);
  ;
  const v746 = v744[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
  const v747 = v746[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
  const v748 = stdlib.div(v747, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
  const v754 = stdlib.sub(v747, v748);
  const v757 = v746[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
  const v758 = v746[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
  const v759 = [v754, v757, v758];
  const v760 = stdlib.Array_set(v744, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v759);
  ;
  const v762 = v760[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
  const v763 = v762[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    Alice0_65: ctc0,
    Charles_joinBenefactor0_65: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v446 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v447 = [v446];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v455], secs: v457, time: v456, didSend: v27, from: v454 } = txn1;
  const v458 = v447[stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '0')];
  const v460 = v458[stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '1')];
  const v461 = v458[stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '2')];
  const v462 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v460, v461];
  const v463 = stdlib.Array_set(v447, stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '0'), v462);
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v467, time: v466, didSend: v34, from: v465 } = txn2;
  ;
  const v468 = v463[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0')];
  const v469 = v468[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0')];
  const v470 = stdlib.add(v469, stdlib.checkedBigNumberify('./index.rsh:6:13:decimal', stdlib.UInt_max, '5000000000'));
  const v473 = v468[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '1')];
  const v474 = v468[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '2')];
  const v475 = [v470, v473, v474];
  const v476 = stdlib.Array_set(v463, stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0'), v475);
  ;
  const v477 = stdlib.addressEq(v454, v465);
  stdlib.assert(v477, {
    at: './index.rsh:38:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v480 = stdlib.add(v456, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '200'));
  const v482 = [v454, v454, v454];
  let v484 = v482;
  let v485 = false;
  let v486 = v480;
  let v488 = stdlib.checkedBigNumberify('./index.rsh:45:5:decimal', stdlib.UInt_max, '0');
  let v489 = v466;
  let v490 = v456;
  let v495 = v476;
  let v496 = stdlib.checkedBigNumberify('./index.rsh:26:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v500 = stdlib.lt(v490, v486);
    const v501 = v485 ? v500 : false;
    
    return v501;})()) {
    const v508 = stdlib.add(v489, stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '5000'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: ['time', v508],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v700], secs: v702, time: v701, didSend: v299, from: v699 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v703 = false;
      await txn4.getOutput('Charles_inform', 'v703', ctc6, v703);
      const v708 = stdlib.add(v488, stdlib.checkedBigNumberify('./index.rsh:95:33:decimal', stdlib.UInt_max, '1'));
      const cv484 = v484;
      const cv485 = v485;
      const cv486 = v486;
      const cv488 = v708;
      const cv489 = v701;
      const cv490 = v489;
      const cv495 = v495;
      const cv496 = v496;
      
      v484 = cv484;
      v485 = cv485;
      v486 = cv486;
      v488 = cv488;
      v489 = cv489;
      v490 = cv490;
      v495 = cv495;
      v496 = cv496;
      
      continue;
      }
    else {
      const {data: [v535], secs: v537, time: v536, didSend: v198, from: v534 } = txn3;
      switch (v535[0]) {
        case 'Alice0_65': {
          const v538 = v535[1];
          ;
          const v545 = stdlib.addressEq(v534, v454);
          stdlib.assert(v545, {
            at: './index.rsh:43:70:application',
            fs: [],
            msg: null,
            who: 'Bob'
            });
          const v552 = stdlib.add(v536, stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '200'));
          const v554 = v495[stdlib.checkedBigNumberify('./index.rsh:66:46:application', stdlib.UInt_max, '0')];
          const v555 = v554[stdlib.checkedBigNumberify('./index.rsh:66:46:application', stdlib.UInt_max, '0')];
          const txn4 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 5,
            out_tys: [ctc6],
            timeoutAt: ['time', v552],
            waitIfNotPresent: false
            }));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.sendrecv({
              args: [v454, v455, v484, v486, v488, v495, v496, v536, v552, v555],
              evt_cnt: 0,
              funcNum: 6,
              lct: v536,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn5) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                stdlib.simMapDupe(sim_r, 0, map0);
                
                const {data: [], secs: v577, time: v576, didSend: v242, from: v575 } = txn5;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v454,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v454,
                  tok: v455
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v455
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc7, ctc3, ctc8, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc1],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v577, time: v576, didSend: v242, from: v575 } = txn5;
            ;
            ;
            ;
            stdlib.protect(ctc0, await interact.countDownTime(stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '200')), {
              at: './index.rsh:30:29:application',
              fs: ['at ./index.rsh:29:9:application call to [unknown function] (defined at: ./index.rsh:29:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:28:28:function exp)', 'at ./index.rsh:66:18:application call to "closeTo" (defined at: reach standard library:198:8:function exp)', 'at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:11:function exp)'],
              msg: 'countDownTime',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v561], secs: v563, time: v562, didSend: v213, from: v560 } = txn4;
            ;
            const v564 = stdlib.addressEq(v454, v560);
            stdlib.assert(v564, {
              at: './index.rsh:65:11:dot',
              fs: ['at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:11:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            stdlib.protect(ctc0, await interact.showOutcome(v561), {
              at: './index.rsh:69:31:application',
              fs: ['at ./index.rsh:68:13:application call to [unknown function] (defined at: ./index.rsh:68:25:function exp)', 'at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:11:function exp)'],
              msg: 'showOutcome',
              who: 'Bob'
              });
            
            const v571 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:27:17:decimal', stdlib.UInt_max, '200'), v536);
            const v572 = v561 ? v536 : v571;
            const cv484 = v484;
            const cv485 = v561;
            const cv486 = v572;
            const cv488 = v488;
            const cv489 = v562;
            const cv490 = v536;
            const cv495 = v495;
            const cv496 = v496;
            
            v484 = cv484;
            v485 = cv485;
            v486 = cv486;
            v488 = cv488;
            v489 = cv489;
            v490 = cv490;
            v495 = cv495;
            v496 = cv496;
            
            continue;}
          
          
          break;
          }
        case 'Charles_joinBenefactor0_65': {
          const v617 = v535[1];
          undefined /* setApiDetails */;
          ;
          const v685 = stdlib.mod(v488, stdlib.checkedBigNumberify('./index.rsh:86:60:decimal', stdlib.UInt_max, '3'));
          const v687 = stdlib.Array_set(v484, v685, v534);
          await stdlib.mapSet(map0, v534, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, '0'));
          const v688 = true;
          await txn3.getOutput('Charles_joinBenefactor', 'v688', ctc6, v688);
          const v694 = stdlib.add(v488, stdlib.checkedBigNumberify('./index.rsh:89:35:decimal', stdlib.UInt_max, '1'));
          const cv484 = v687;
          const cv485 = v485;
          const cv486 = v486;
          const cv488 = v694;
          const cv489 = v536;
          const cv490 = v489;
          const cv495 = v495;
          const cv496 = v496;
          
          v484 = cv484;
          v485 = cv485;
          v486 = cv486;
          v488 = cv488;
          v489 = cv489;
          v490 = cv490;
          v495 = cv495;
          v496 = cv496;
          
          continue;
          break;
          }
        }}
    
    }
  const v711 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '0')];
  const v712 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '1')];
  const v713 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '2')];
  const v714 = v495[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
  const v715 = v714[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
  const v716 = stdlib.div(v715, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
  const v722 = stdlib.sub(v715, v716);
  const v725 = v714[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
  const v726 = v714[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
  const v727 = [v722, v725, v726];
  const v728 = stdlib.Array_set(v495, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v727);
  ;
  const v730 = v728[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
  const v731 = v730[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
  const v732 = stdlib.div(v731, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
  const v738 = stdlib.sub(v731, v732);
  const v741 = v730[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
  const v742 = v730[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
  const v743 = [v738, v741, v742];
  const v744 = stdlib.Array_set(v728, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v743);
  ;
  const v746 = v744[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
  const v747 = v746[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
  const v748 = stdlib.div(v747, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
  const v754 = stdlib.sub(v747, v748);
  const v757 = v746[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
  const v758 = v746[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
  const v759 = [v754, v757, v758];
  const v760 = stdlib.Array_set(v744, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v759);
  ;
  const v762 = v760[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
  const v763 = v762[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function _Charles_inform4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Charles_inform4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Charles_inform4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v454, v455, v484, v485, v486, v488, v489, v495, v496, v508] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc6, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1]);
  const v698 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:93:7:application',
    fs: ['at ./index.rsh:93:7:application call to [unknown function] (defined at: ./index.rsh:93:7:function exp)', 'at ./index.rsh:92:37:application call to [unknown function] (defined at: ./index.rsh:92:37:function exp)'],
    msg: 'in',
    who: 'Charles_inform'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v454, v455, v484, v485, v486, v488, v489, v495, v496, v508, v698],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:93:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v700], secs: v702, time: v701, didSend: v299, from: v699 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Charles_inform"
        });
      ;
      const v703 = false;
      const v704 = await txn1.getOutput('Charles_inform', 'v703', ctc6, v703);
      
      const v708 = stdlib.add(v488, stdlib.checkedBigNumberify('./index.rsh:95:33:decimal', stdlib.UInt_max, '1'));
      const v1113 = v484;
      const v1114 = v485;
      const v1115 = v486;
      const v1116 = v708;
      const v1117 = v701;
      const v1119 = v495;
      const v1120 = v496;
      const v1121 = stdlib.lt(v489, v486);
      const v1122 = v485 ? v1121 : false;
      if (v1122) {
        const v1123 = stdlib.add(v701, stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '5000'));
        sim_r.isHalt = false;
        }
      else {
        const v1124 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '0')];
        const v1125 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '1')];
        const v1126 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '2')];
        const v1127 = v495[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v1128 = v1127[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v1129 = stdlib.div(v1128, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
        const v1130 = stdlib.sub(v1128, v1129);
        const v1131 = v1127[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
        const v1132 = v1127[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
        const v1133 = [v1130, v1131, v1132];
        const v1134 = stdlib.Array_set(v495, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v1133);
        sim_r.txns.push({
          kind: 'from',
          to: v1124,
          tok: v455
          });
        const v1135 = v1134[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v1136 = v1135[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v1137 = stdlib.div(v1136, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
        const v1138 = stdlib.sub(v1136, v1137);
        const v1139 = v1135[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
        const v1140 = v1135[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
        const v1141 = [v1138, v1139, v1140];
        const v1142 = stdlib.Array_set(v1134, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v1141);
        sim_r.txns.push({
          kind: 'from',
          to: v1125,
          tok: v455
          });
        const v1143 = v1142[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v1144 = v1143[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v1145 = stdlib.div(v1144, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
        const v1146 = stdlib.sub(v1144, v1145);
        const v1147 = v1143[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
        const v1148 = v1143[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
        const v1149 = [v1146, v1147, v1148];
        const v1150 = stdlib.Array_set(v1142, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v1149);
        sim_r.txns.push({
          kind: 'from',
          to: v1126,
          tok: v455
          });
        const v1151 = v1150[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
        const v1152 = v1151[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v454,
          tok: v455
          });
        sim_r.txns.push({
          kind: 'from',
          to: v454,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v455
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc6, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v700], secs: v702, time: v701, didSend: v299, from: v699 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v703 = false;
  const v704 = await txn1.getOutput('Charles_inform', 'v703', ctc6, v703);
  stdlib.protect(ctc0, await interact.out(v700, v704), {
    at: './index.rsh:93:7:application',
    fs: ['at ./index.rsh:93:7:application call to [unknown function] (defined at: ./index.rsh:93:7:function exp)', 'at ./index.rsh:94:8:application call to "k" (defined at: ./index.rsh:93:7:function exp)', 'at ./index.rsh:92:37:application call to [unknown function] (defined at: ./index.rsh:92:37:function exp)'],
    msg: 'out',
    who: 'Charles_inform'
    });
  
  const v708 = stdlib.add(v488, stdlib.checkedBigNumberify('./index.rsh:95:33:decimal', stdlib.UInt_max, '1'));
  const v1113 = v484;
  const v1114 = v485;
  const v1115 = v486;
  const v1116 = v708;
  const v1117 = v701;
  const v1119 = v495;
  const v1120 = v496;
  const v1121 = stdlib.lt(v489, v486);
  const v1122 = v485 ? v1121 : false;
  if (v1122) {
    const v1123 = stdlib.add(v701, stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '5000'));
    return;
    }
  else {
    const v1124 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '0')];
    const v1125 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '1')];
    const v1126 = v484[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '2')];
    const v1127 = v495[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
    const v1128 = v1127[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
    const v1129 = stdlib.div(v1128, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
    const v1130 = stdlib.sub(v1128, v1129);
    const v1131 = v1127[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
    const v1132 = v1127[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
    const v1133 = [v1130, v1131, v1132];
    const v1134 = stdlib.Array_set(v495, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v1133);
    ;
    const v1135 = v1134[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
    const v1136 = v1135[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
    const v1137 = stdlib.div(v1136, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
    const v1138 = stdlib.sub(v1136, v1137);
    const v1139 = v1135[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
    const v1140 = v1135[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
    const v1141 = [v1138, v1139, v1140];
    const v1142 = stdlib.Array_set(v1134, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v1141);
    ;
    const v1143 = v1142[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
    const v1144 = v1143[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
    const v1145 = stdlib.div(v1144, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
    const v1146 = stdlib.sub(v1144, v1145);
    const v1147 = v1143[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
    const v1148 = v1143[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
    const v1149 = [v1146, v1147, v1148];
    const v1150 = stdlib.Array_set(v1142, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v1149);
    ;
    const v1151 = v1150[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
    const v1152 = v1151[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
    ;
    ;
    return;
    }
  
  
  };
export async function _Charles_joinBenefactor4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Charles_joinBenefactor4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Charles_joinBenefactor4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Alice0_65: ctc0,
    Charles_joinBenefactor0_65: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v454, v455, v484, v485, v486, v488, v489, v495, v496, v508] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc6, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1]);
  const v517 = ctc.selfAddress();
  const v519 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:80:10:application call to [unknown function] (defined at: ./index.rsh:80:10:function exp)', 'at ./index.rsh:43:70:application call to "runCharles_joinBenefactor0_65" (defined at: ./index.rsh:78:9:function exp)', 'at ./index.rsh:43:70:application call to [unknown function] (defined at: ./index.rsh:43:70:function exp)'],
    msg: 'in',
    who: 'Charles_joinBenefactor'
    });
  const v521 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v517), null);
  let v522;
  switch (v521[0]) {
    case 'None': {
      const v523 = v521[1];
      v522 = true;
      
      break;
      }
    case 'Some': {
      const v524 = v521[1];
      v522 = false;
      
      break;
      }
    }
  stdlib.assert(v522, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:81:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:10:application call to [unknown function] (defined at: ./index.rsh:80:10:function exp)', 'at ./index.rsh:80:10:application call to [unknown function] (defined at: ./index.rsh:80:10:function exp)', 'at ./index.rsh:43:70:application call to "runCharles_joinBenefactor0_65" (defined at: ./index.rsh:78:9:function exp)', 'at ./index.rsh:43:70:application call to [unknown function] (defined at: ./index.rsh:43:70:function exp)'],
    msg: 'Already a benefactor',
    who: 'Charles_joinBenefactor'
    });
  const v526 = stdlib.le(v488, stdlib.checkedBigNumberify('./index.rsh:82:24:decimal', stdlib.UInt_max, '3'));
  stdlib.assert(v526, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:82:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:10:application call to [unknown function] (defined at: ./index.rsh:80:10:function exp)', 'at ./index.rsh:80:10:application call to [unknown function] (defined at: ./index.rsh:80:10:function exp)', 'at ./index.rsh:43:70:application call to "runCharles_joinBenefactor0_65" (defined at: ./index.rsh:78:9:function exp)', 'at ./index.rsh:43:70:application call to [unknown function] (defined at: ./index.rsh:43:70:function exp)'],
    msg: 'Limit Exceeded cannot register in benefactor list',
    who: 'Charles_joinBenefactor'
    });
  const v530 = ['Charles_joinBenefactor0_65', v519];
  
  const txn1 = await (ctc.sendrecv({
    args: [v454, v455, v484, v485, v486, v488, v489, v495, v496, v508, v530],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:84:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v535], secs: v537, time: v536, didSend: v198, from: v534 } = txn1;
      
      switch (v535[0]) {
        case 'Alice0_65': {
          const v538 = v535[1];
          
          break;
          }
        case 'Charles_joinBenefactor0_65': {
          const v617 = v535[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Charles_joinBenefactor"
            });
          ;
          const v685 = stdlib.mod(v488, stdlib.checkedBigNumberify('./index.rsh:86:60:decimal', stdlib.UInt_max, '3'));
          const v687 = stdlib.Array_set(v484, v685, v534);
          await stdlib.simMapSet(sim_r, 0, v534, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, '0'));
          const v688 = true;
          const v689 = await txn1.getOutput('Charles_joinBenefactor', 'v688', ctc6, v688);
          
          const v694 = stdlib.add(v488, stdlib.checkedBigNumberify('./index.rsh:89:35:decimal', stdlib.UInt_max, '1'));
          const v1153 = v687;
          const v1154 = v485;
          const v1155 = v486;
          const v1156 = v694;
          const v1157 = v536;
          const v1159 = v495;
          const v1160 = v496;
          const v1161 = stdlib.lt(v489, v486);
          const v1162 = v485 ? v1161 : false;
          if (v1162) {
            const v1163 = stdlib.add(v536, stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '5000'));
            sim_r.isHalt = false;
            }
          else {
            const v1164 = v687[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '0')];
            const v1165 = v687[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '1')];
            const v1166 = v687[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '2')];
            const v1167 = v495[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
            const v1168 = v1167[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
            const v1169 = stdlib.div(v1168, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
            const v1170 = stdlib.sub(v1168, v1169);
            const v1171 = v1167[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
            const v1172 = v1167[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
            const v1173 = [v1170, v1171, v1172];
            const v1174 = stdlib.Array_set(v495, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v1173);
            sim_r.txns.push({
              kind: 'from',
              to: v1164,
              tok: v455
              });
            const v1175 = v1174[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
            const v1176 = v1175[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
            const v1177 = stdlib.div(v1176, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
            const v1178 = stdlib.sub(v1176, v1177);
            const v1179 = v1175[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
            const v1180 = v1175[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
            const v1181 = [v1178, v1179, v1180];
            const v1182 = stdlib.Array_set(v1174, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v1181);
            sim_r.txns.push({
              kind: 'from',
              to: v1165,
              tok: v455
              });
            const v1183 = v1182[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
            const v1184 = v1183[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
            const v1185 = stdlib.div(v1184, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
            const v1186 = stdlib.sub(v1184, v1185);
            const v1187 = v1183[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
            const v1188 = v1183[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
            const v1189 = [v1186, v1187, v1188];
            const v1190 = stdlib.Array_set(v1182, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v1189);
            sim_r.txns.push({
              kind: 'from',
              to: v1166,
              tok: v455
              });
            const v1191 = v1190[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
            const v1192 = v1191[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v454,
              tok: v455
              });
            sim_r.txns.push({
              kind: 'from',
              to: v454,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v455
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc6, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v535], secs: v537, time: v536, didSend: v198, from: v534 } = txn1;
  switch (v535[0]) {
    case 'Alice0_65': {
      const v538 = v535[1];
      return;
      break;
      }
    case 'Charles_joinBenefactor0_65': {
      const v617 = v535[1];
      undefined /* setApiDetails */;
      ;
      const v685 = stdlib.mod(v488, stdlib.checkedBigNumberify('./index.rsh:86:60:decimal', stdlib.UInt_max, '3'));
      const v687 = stdlib.Array_set(v484, v685, v534);
      await stdlib.mapSet(map0, v534, stdlib.checkedBigNumberify('./index.rsh:87:22:decimal', stdlib.UInt_max, '0'));
      const v688 = true;
      const v689 = await txn1.getOutput('Charles_joinBenefactor', 'v688', ctc6, v688);
      if (v198) {
        stdlib.protect(ctc0, await interact.out(v617, v689), {
          at: './index.rsh:79:7:application',
          fs: ['at ./index.rsh:79:7:application call to [unknown function] (defined at: ./index.rsh:79:7:function exp)', 'at ./index.rsh:88:10:application call to "k" (defined at: ./index.rsh:85:11:function exp)', 'at ./index.rsh:85:11:application call to [unknown function] (defined at: ./index.rsh:85:11:function exp)'],
          msg: 'out',
          who: 'Charles_joinBenefactor'
          });
        }
      else {
        }
      
      const v694 = stdlib.add(v488, stdlib.checkedBigNumberify('./index.rsh:89:35:decimal', stdlib.UInt_max, '1'));
      const v1153 = v687;
      const v1154 = v485;
      const v1155 = v486;
      const v1156 = v694;
      const v1157 = v536;
      const v1159 = v495;
      const v1160 = v496;
      const v1161 = stdlib.lt(v489, v486);
      const v1162 = v485 ? v1161 : false;
      if (v1162) {
        const v1163 = stdlib.add(v536, stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '5000'));
        return;
        }
      else {
        const v1164 = v687[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '0')];
        const v1165 = v687[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '1')];
        const v1166 = v687[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '2')];
        const v1167 = v495[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v1168 = v1167[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v1169 = stdlib.div(v1168, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
        const v1170 = stdlib.sub(v1168, v1169);
        const v1171 = v1167[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
        const v1172 = v1167[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
        const v1173 = [v1170, v1171, v1172];
        const v1174 = stdlib.Array_set(v495, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v1173);
        ;
        const v1175 = v1174[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v1176 = v1175[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v1177 = stdlib.div(v1176, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
        const v1178 = stdlib.sub(v1176, v1177);
        const v1179 = v1175[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
        const v1180 = v1175[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
        const v1181 = [v1178, v1179, v1180];
        const v1182 = stdlib.Array_set(v1174, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v1181);
        ;
        const v1183 = v1182[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v1184 = v1183[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v1185 = stdlib.div(v1184, stdlib.checkedBigNumberify('./index.rsh:98:31:decimal', stdlib.UInt_max, '5'));
        const v1186 = stdlib.sub(v1184, v1185);
        const v1187 = v1183[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '1')];
        const v1188 = v1183[stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '2')];
        const v1189 = [v1186, v1187, v1188];
        const v1190 = stdlib.Array_set(v1182, stdlib.checkedBigNumberify('./index.rsh:98:43:application', stdlib.UInt_max, '0'), v1189);
        ;
        const v1191 = v1190[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
        const v1192 = v1191[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Charles_inform(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Charles_inform expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Charles_inform expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Charles_inform4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Charles_joinBenefactor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Charles_joinBenefactor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Charles_joinBenefactor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Charles_joinBenefactor4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Charles_inform()byte`, `Charles_joinBenefactor()byte`],
    pure: [`time_seeTime()uint64`],
    sigs: [`Charles_inform()byte`, `Charles_joinBenefactor()byte`, `time_seeTime()uint64`]
    },
  appApproval: `BiAUAAEEBSADyAEIrv6jhAWp4OL1DAa5AakBugGJAZEBmQGyAYDkl9ASoI0GJgMBAAEBACI1ADEYQQXAKmRJIls1ASEHWzUCMRkjEkEACjEAKIEJr2ZCBYw2GgAXSUEAYCI1BCM1BkkhCAxAAEdJIQkMQAAOIQkSRCo1/yk0/1BCAdMhCBJENAFJJQxAABMlEkQoZClkUEk1A1eICDUHQgVSJBJEKGQpZFBJNQNXiQg1B0IFP4GMsI/dAhJEKkIBFDYaAhc1BDYaAzYaARdJJAxAAXRJJQxAAPpJIQoMQAB8IQoSRCU0ARJENARJIhJMNAISEUQoZClkUEk1A0lXACA1/yEEWzX+gARhtKwMsDIGNAMhC1sPRLEisgE0AyEMW7III7IQNP+yB7OxIrIBNAOBwQFbshIkshA0/7IUNP6yEbOxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0IEUEglNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf+BsQFbNf5JNQUXNf2ABLCliFA0/RZRBwhQsDIGNAMhC1sMRDT/MQASRDT/NAMhBFs0A1coYDT9IQY0/gg0/jT9TTQDgZABWzIGNP40A1eYETQDIQxbQgJ/SCQ0ARJENARJIhJMNAISEUQoZClkUDUDSTUFNf+ABNTgGC00/1CwMgY0AyENWw9EgAkAAAAAAAACvwCwKDUHNANXACA0AyEEWzQDVyhgNANXiAEXNAMhDls0AyEPWyMIMgY0AyEQWzQDV6ERNAMhEVtCAgtJIwxAAYtJIQUMQAENSCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEEWzX+VyhgNf0hDls1/CEPWzX7V6ERNfohEVs1+Uk1BTX4gAQuRcYBNPhQsDIGNAMhDVsMRDT4IlVAAFMxADT/EkQyBiEGCDX3NPpXABEiWzX2NP80/hZQNP1QNPwWUDT7FlA0+lA0+RZQMgYWUDT3FlA09hZQKEsBVwB/ZylLAVd/SmdIJTUBMgY1AkICwTEAKIAJAQAAAAAAAAAAZoAJAAAAAAAAArABsCk1BzT/NP40/SIhBDT7IQUYC1IxAFA0/SEESTT7IQUYCwiBYFJQNANXiAEXNPw0+yMIMgY0AyEQWzT6NPlCAPEjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQRbNf6BKFs1/VcwETX8gASai5F0sDT8VwARNfshEjT+iAKNNP8xABJENP80/jT/SVA0/1AiNP0hBggiMgY0/TT7IlshEggWNPtXCAhQNPtXEAFQIkIAekghE4gCOyI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsIERr0k1/lcAETX9IQevNP1XCAhQNP1XEAFQNfwhE4gB+bEisgEishIkshAyCrIUNP+yEbMxADT/FlAyBhZQNPxQKEsBVwBBZ0gjNQEyBjUCQgF1Nf81/jX9Nfw1+zX6Nfk1+DX3NfY0+TT9NPoMEEEASDT8gYgnCDX1NPY09xZQNPhQNPkWUQcIUDT6FlA0+xZQNPwWUDT+UDT/FlA09RZQKEsBVwB/ZylLAVd/Q2dIJDUBMgY1AkIBDjT+VwARSTX1IltJNfQlCjXzNPQ08wkWNPVXCAhQNPVXEAFQNfKxIrIBNPOyEiSyEDT4VwAgshQ097IRszTyVwARSTXxIltJNfAlCjXvNPA07wkWNPFXCAhQNPFXEAFQNe6xIrIBNO+yEiSyEDT4VyAgshQ097IRszTuVwARSTXtIltJNewlCjXrsSKyATTrshIkshA0+FdAILIUNPeyEbOxIrIBNOw06wkWNO1XCAhQNO1XEAFQVwARIluyEiSyEDT2shQ097IRs7EisgE0/7III7IQNPayB7OxIrIBIrISJLIQMgmyFTIKshQ097IRs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIzE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 2,
  stateSize: 201,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v455",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v455",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Alice0_65",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Charles_joinBenefactor0_65",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T15",
                "name": "v535",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v700",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v561",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v688",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v703",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Charles_inform",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Charles_joinBenefactor",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Alice0_65",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Charles_joinBenefactor0_65",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T15",
                "name": "v535",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v700",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v561",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "time_seeTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002c5738038062002c578339810160408190526200002691620003b9565b60008055436003556200003862000223565b604080513381528351602080830191909152840151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000e5929062000176565b6060820152620000f834156008620001f9565b620001026200028a565b338152602080840151516001600160a01b0316818301524360408084018290526060808601519085015260016000819055919091555162000146918391016200048d565b604051602081830303815290604052600290805190602001906200016c929190620002c6565b505050506200056b565b6200018062000355565b60005b6001811015620001d657848160018110620001a257620001a262000477565b6020020151828260018110620001bc57620001bc62000477565b602002015280620001cd8162000504565b91505062000183565b5081818460018110620001ed57620001ed62000477565b60200201529392505050565b816200021f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200025662000355565b815260408051606081018252600080825260208281018290529282015291019081526020016200028562000355565b905290565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016200028562000355565b828054620002d4906200052e565b90600052602060002090601f016020900481019282620002f8576000855562000343565b82601f106200031357805160ff191683800117855562000343565b8280016001018555821562000343579182015b828111156200034357825182559160200191906001019062000326565b5062000351929150620003a2565b5090565b60405180602001604052806001905b6200038b604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003645790505090565b5b80821115620003515760008155600101620003a3565b6000818303604080821215620003ce57600080fd5b80518082016001600160401b038082118383101715620003fe57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200041857600080fd5b8351945060208501915084821081831117156200044557634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200046557600080fd5b90825260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b039081168252602080840151909116818301526040808401518184015260608085015160c0850193919081860160005b6001811015620004f85782518051835285810151868401528601511515868301529184019190830190600101620004c6565b50505050505092915050565b60006000198214156200052757634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200054357607f821691505b602082108114156200056557634e487b7160e01b600052602260045260246000fd5b50919050565b6126dc806200057b6000396000f3fe6080604052600436106100a55760003560e01c8063a8813ab211610061578063a8813ab214610152578063a98bf2231461015a578063ab53f2c61461016d578063ad9fa3d814610190578063c7980037146101a3578063eaf5f04f146101b657005b80631e93b0f1146100ae57806327dfecf6146100d25780632c10a159146100ea5780633bc5b7bf146100fd578063832307571461012a578063a1bb51161461013f57005b366100ac57005b005b3480156100ba57600080fd5b506003545b6040519081526020015b60405180910390f35b6100da6101cb565b60405190151581526020016100c9565b6100ac6100f8366004611d0a565b610203565b34801561010957600080fd5b5061011d610118366004611d3b565b610233565b6040516100c99190611d8c565b34801561013657600080fd5b506001546100bf565b6100ac61014d366004611dbc565b61025f565b6100da61028b565b6100ac610168366004611d0a565b6102ca565b34801561017957600080fd5b506101826102f6565b6040516100c9929190611dfa565b6100ac61019e366004611d0a565b610393565b6100ac6101b1366004611d0a565b6103bf565b3480156101c257600080fd5b506100bf6103eb565b60006101d5611925565b60208082015160009081905260408051808201909152818152918201526101fc8282610621565b5192915050565b604080518082019091526000808252602082015261022f61022936849003840184611eeb565b8261082e565b5050565b604080516060810182526000808252602082018190529181019190915261025982610ab0565b92915050565b604080518082019091526000808252602082015261022f61028536849003840184611f41565b82610b83565b6000610295611954565b6020810151516001908190525060408051808201909152600080825260208201526102c08282610b83565b6020015192915050565b604080518082019091526000808252602082015261022f6102f036849003840184612062565b82610621565b60006060600054600280805461030b9061207e565b80601f01602080910402602001604051908101604052809291908181526020018280546103379061207e565b80156103845780601f1061035957610100808354040283529160200191610384565b820191906000526020600020905b81548152906001019060200180831161036757829003601f168201915b50505050509050915091509091565b604080518082019091526000808252602082015261022f6103b936849003840184612062565b82610f09565b604080518082019091526000808252602082015261022f6103e536849003840184611eeb565b826110ff565b6000600160005414156104a8576000600280546104079061207e565b80601f01602080910402602001604051908101604052809291908181526020018280546104339061207e565b80156104805780601f1061045557610100808354040283529160200191610480565b820191906000526020600020905b81548152906001019060200180831161046357829003601f168201915b50505050508060200190518101906104989190612152565b90506104a6600060076112a6565b505b6004600054141561055d576000600280546104c29061207e565b80601f01602080910402602001604051908101604052809291908181526020018280546104ee9061207e565b801561053b5780601f106105105761010080835404028352916020019161053b565b820191906000526020600020905b81548152906001019060200180831161051e57829003601f168201915b50505050508060200190518101906105539190612244565b6080015192915050565b60056000541415610612576000600280546105779061207e565b80601f01602080910402602001604051908101604052809291908181526020018280546105a39061207e565b80156105f05780601f106105c5576101008083540402835291602001916105f0565b820191906000526020600020905b8154815290600101906020018083116105d357829003601f168201915b505050505080602001905181019061060891906122f2565b6060015192915050565b61061e600060076112a6565b90565b61063160046000541460156112a6565b815161064c90158061064557508251600154145b60166112a6565b60008080556002805461065e9061207e565b80601f016020809104026020016040519081016040528092919081815260200182805461068a9061207e565b80156106d75780601f106106ac576101008083540402835291602001916106d7565b820191906000526020600020905b8154815290600101906020018083116106ba57829003601f168201915b50505050508060200190518101906106ef9190612244565b905061070481610120015143101560176112a6565b7f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943384604051610735929190612396565b60405180910390a1610749341560146112a6565b604051600081527f5592476a4078ca704929294470246fbda0d299e145d1a5872806b53b9e8d00e69060200160405180910390a16000825261078961198d565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518284018051919091526060850151815190151593019290925260808401519151015260a08201516107e4906001906123d6565b6020820180516060019190915280514360809091015260c080840151825160a0015260e08085015183519092019190915261010084015191510152610828816112cc565b50505050565b61083e600160005414600c6112a6565b815161085990158061085257508251600154145b600d6112a6565b60008080556002805461086b9061207e565b80601f01602080910402602001604051908101604052809291908181526020018280546108979061207e565b80156108e45780601f106108b9576101008083540402835291602001916108e4565b820191906000526020600020905b8154815290600101906020018083116108c757829003601f168201915b50505050508060200190518101906108fc9190612152565b90506109066119b6565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a1610959341560096112a6565b606082015151516109709064012a05f200906123d6565b81515260608201805151602090810151835182015290515160409081015183519015159101528201516109b5906109ae90339064012a05f20061160f565b600a6112a6565b81516109cd906001600160a01b03163314600b6112a6565b8151602082810180516001600160a01b03938416905284518151908416920191909152835190519116604090910152610a0461198d565b825181516001600160a01b0391821690526020808501518351921691810191909152828101518183018051919091525160009101526040830151610a4a9060c8906123d6565b60208201805160409081019290925280516000606091820181905282514360809091015292860151915160a001919091528401518351610a8a9290611627565b60208201805160c0019190915251600060e090910152610aa9816112cc565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610afc57610afc611d58565b1415610b73576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610b3d57610b3d611d58565b6001811115610b4e57610b4e611d58565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b610b9360046000541460116112a6565b8151610bae901580610ba757508251600154145b60126112a6565b600080805560028054610bc09061207e565b80601f0160208091040260200160405190810160405280929190818152602001828054610bec9061207e565b8015610c395780601f10610c0e57610100808354040283529160200191610c39565b820191906000526020600020905b815481529060010190602001808311610c1c57829003601f168201915b5050505050806020019051810190610c519190612244565b9050610c696040518060200160405280600081525090565b610c7b826101200151431060136112a6565b7fe30c1faad84d1c2fbcb49a9d8c9c13ee51d538efe993e4477a23c971fd304b583385604051610cac929190612404565b60405180910390a16000602085015151516001811115610cce57610cce611d58565b1415610dbc57610ce03415600e6112a6565b8151610cf8906001600160a01b03163314600f6112a6565b610d0360c8436123d6565b8152610d0d6119e6565b82516001600160a01b0390811682526020808501519091168183015260408085015181840152608080860151606085015260a0808701519185019190915260e08087018051928601929092526101008088015160c08701524391860182905286519086015290515151610120850152600560005560015551610d91918391016124c1565b60405160208183030381529060405260029080519060200190610db5929190611a43565b5050610828565b6001602085015151516001811115610dd657610dd6611d58565b141561082857610de8341560106112a6565b336000908152600460209081526040808320805460ff19166001908117825590810193909355519182527f927620a696b028648da5a070a044d586b5badd52b92b0b94ce5db26c48b55ca6910160405180910390a160016020840152610e4c61198d565b825181516001600160a01b03918216905260208085015183519216910152604083015160a0840151610e8b9190610e8590600390612571565b3361169b565b602080830180519290925260608501518251901515910152608084015190516040015260a0830151610ebf906001906123d6565b6020820180516060019190915280514360809091015260c080850151825160a0015260e08086015183519092019190915261010085015191510152610f03816112cc565b50610828565b610f19600560005414601a6112a6565b8151610f34901580610f2d57508251600154145b601b6112a6565b600080805560028054610f469061207e565b80601f0160208091040260200160405190810160405280929190818152602001828054610f729061207e565b8015610fbf5780601f10610f9457610100808354040283529160200191610fbf565b820191906000526020600020905b815481529060010190602001808311610fa257829003601f168201915b5050505050806020019051810190610fd791906122f2565b9050610feb8161010001514310601c6112a6565b7f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c21365338460405161101c929190612396565b60405180910390a1611030341560186112a6565b8051611048906001600160a01b0316331460196112a6565b61105061198d565b815181516001600160a01b039182169052602080840151835192169181019190915260408301518183018051919091528582018051519151911515919092015251516110ab5760e08201516110a69060c86123d6565b6110b1565b8160e001515b6020820180516040019190915260808084015182516060015281514391015260e080840151825160a090810191909152840151825160c09081019190915284015191510152610828816112cc565b61110f600560005414601e6112a6565b815161112a90158061112357508251600154145b601f6112a6565b60008080556002805461113c9061207e565b80601f01602080910402602001604051908101604052809291908181526020018280546111689061207e565b80156111b55780601f1061118a576101008083540402835291602001916111b5565b820191906000526020600020905b81548152906001019060200180831161119857829003601f168201915b50505050508060200190518101906111cd91906122f2565b90506111e281610100015143101560206112a6565b60408051338152845160208083019190915285015115158183015290517fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae9181900360600190a16112353415601d6112a6565b805160c08201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611272573d6000803e3d6000fd5b5061128b8160200151826000015183610120015161172b565b600080805560018190556112a190600290611ac7565b505050565b8161022f5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6112d4611b04565b8160200151602001516112e85760006112fa565b6020820151604081015160a090910151105b156113de5761138882602001516080015161131591906123d6565b815261131f611bc2565b8251516001600160a01b03908116825283516020908101519091168183015280840180515160408085019190915281518301511515606080860191909152825182015160808087019190915283519091015160a08601528251015160c0808601919091528251015160e0808601919091529151909101516101008401528351610120840152600460005543600155516113ba91839101612585565b60405160208183030381529060405260029080519060200190610828929190611a43565b602082015160c0015151516113f590600590612627565b602082810182905283015160c001515151611410919061263b565b60408281018051929092526020848101805160c09081015151830151855190930192909252805182015151830151845190151593019290925290510151905161145c9190600090611627565b606082015281516020908101518184015151519183015161147d929061172b565b6060810151515161149090600590612627565b60808201819052606082015151516114a8919061263b565b60a082018051919091526060820180515160209081015183519091015280515160409081015183519015159101525190516114e69190600090611627565b60c08201528151602090810151908301515161150e919060016020020151836080015161172b565b60c0810151515161152190600590612627565b60e0820181905260c08201515151611539919061263b565b610100820180519190915260c082018051516020908101518351820152905151604090810151925192151592810192909252835181015190840151519091015160e083015161158992919061172b565b81516020810151905160c08301516101008401516115b69392916115af91600090611627565b515161172b565b815151602083015160e001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156115f8573d6000803e3d6000fd5b506000808055600181905561022f90600290611ac7565b600061161d8385308561173f565b90505b9392505050565b61162f611c21565b60005b600181101561167b5784816001811061164d5761164d6123ee565b6020020151828260018110611664576116646123ee565b60200201528061167381612652565b915050611632565b508181846001811061168f5761168f6123ee565b60200201529392505050565b6116a3611c6c565b60005b60038110156116fd578481600381106116c1576116c16123ee565b60200201518282600381106116d8576116d86123ee565b6001600160a01b039092166020929092020152806116f581612652565b9150506116a6565b5081818460038110611711576117116123ee565b6001600160a01b0390921660209290920201529392505050565b611736838383611819565b6112a157600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916117a69161266d565b60006040518083038185875af1925050503d80600081146117e3576040519150601f19603f3d011682016040523d82523d6000602084013e6117e8565b606091505b50915091506117f9828260016118ea565b508080602001905181019061180e9190612689565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916118789161266d565b60006040518083038185875af1925050503d80600081146118b5576040519150601f19603f3d011682016040523d82523d6000602084013e6118ba565b606091505b50915091506118cb828260026118ea565b50808060200190518101906118e09190612689565b9695505050505050565b606083156118f9575081611620565b8251156119095782518084602001fd5b60405163100960cb60e01b8152600481018390526024016112c3565b60405180604001604052806000815260200161194f60405180602001604052806000151581525090565b905290565b60405180604001604052806000815260200161194f60408051608081018252600060208201818152928201819052606082015290815290565b60408051608081018252600091810182815260608201929092529081526020810161194f611c8a565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810161194f611c6c565b604080516101408101825260008082526020820152908101611a06611c6c565b81526020016000815260200160008152602001611a21611c21565b8152602001600081526020016000815260200160008152602001600081525090565b828054611a4f9061207e565b90600052602060002090601f016020900481019282611a715760008555611ab7565b82601f10611a8a57805160ff1916838001178555611ab7565b82800160010185558215611ab7579182015b82811115611ab7578251825591602001919060010190611a9c565b50611ac3929150611cdd565b5090565b508054611ad39061207e565b6000825580601f10611ae3575050565b601f016020900490600052602060002090810190611b019190611cdd565b50565b6040518061012001604052806000815260200160008152602001611b44604051806060016040528060008152602001600081526020016000151581525090565b8152602001611b51611c21565b815260200160008152602001611b83604051806060016040528060008152602001600081526020016000151581525090565b8152602001611b90611c21565b81526020016000815260200161194f604051806060016040528060008152602001600081526020016000151581525090565b604080516101408101825260008082526020820152908101611be2611c6c565b8152602001600015158152602001600081526020016000815260200160008152602001611c0d611c21565b815260200160008152602001600081525090565b60405180602001604052806001905b611c56604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611c305790505090565b60405180606001604052806003906020820280368337509192915050565b604051806101000160405280611c9e611c6c565b815260200160001515815260200160008152602001600081526020016000815260200160008152602001611cd0611c21565b8152602001600081525090565b5b80821115611ac35760008155600101611cde565b600060408284031215611d0457600080fd5b50919050565b600060408284031215611d1c57600080fd5b6116208383611cf2565b6001600160a01b0381168114611b0157600080fd5b600060208284031215611d4d57600080fd5b813561162081611d26565b634e487b7160e01b600052602160045260246000fd5b60028110611b0157634e487b7160e01b600052602160045260246000fd5b81516060820190611d9c81611d6e565b808352506020830151151560208301526040830151604083015292915050565b600060808284031215611d0457600080fd5b60005b83811015611de9578181015183820152602001611dd1565b838111156108285750506000910152565b8281526040602082015260008251806040840152611e1f816060850160208701611dce565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611e6d57611e6d611e34565b60405290565b6040516060810167ffffffffffffffff81118282101715611e6d57611e6d611e34565b604051610140810167ffffffffffffffff81118282101715611e6d57611e6d611e34565b6040516020810167ffffffffffffffff81118282101715611e6d57611e6d611e34565b8015158114611b0157600080fd5b600060408284031215611efd57600080fd5b6040516040810181811067ffffffffffffffff82111715611f2057611f20611e34565b604052823581526020830135611f3581611edd565b60208201529392505050565b60008183036080811215611f5457600080fd5b611f5c611e4a565b833581526060601f1983011215611f7257600080fd5b60405191506020820182811067ffffffffffffffff82111715611f9757611f97611e34565b604052611fa2611e73565b602085013560028110611fb457600080fd5b81526040850135611fc481611edd565b60208201526060850135611fd781611edd565b6040820152825260208101919091529392505050565b6000818303604081121561200057600080fd5b612008611e4a565b8335815291506020601f198201121561202057600080fd5b506040516020810181811067ffffffffffffffff8211171561204457612044611e34565b604052602083013561205581611edd565b8152602082015292915050565b60006040828403121561207457600080fd5b6116208383611fed565b600181811c9082168061209257607f821691505b60208210811415611d0457634e487b7160e01b600052602260045260246000fd5b8051610b7e81611d26565b8051610b7e81611edd565b600082601f8301126120da57600080fd5b6120e2611eba565b806060808501868111156120f557600080fd5b855b818110156121465782818903121561210f5760008081fd5b612117611e73565b815181526020808301518183015260408084015161213481611edd565b908301529086529094019382016120f7565b50919695505050505050565b600060c0828403121561216457600080fd5b6040516080810181811067ffffffffffffffff8211171561218757612187611e34565b604052825161219581611d26565b815260208301516121a581611d26565b6020820152604083810151908201526121c184606085016120c9565b60608201529392505050565b600082601f8301126121de57600080fd5b6040516060810181811067ffffffffffffffff8211171561220157612201611e34565b60405280606084018581111561221657600080fd5b845b8181101561223957805161222b81611d26565b835260209283019201612218565b509195945050505050565b60006101c0828403121561225757600080fd5b61225f611e96565b612268836120b3565b8152612276602084016120b3565b602082015261228884604085016121cd565b604082015261229960a084016120be565b606082015260c0830151608082015260e083015160a08201526101008084015160c08301526101206122cd868287016120c9565b60e0840152610180850151828401526101a08501518184015250508091505092915050565b60006101c0828403121561230557600080fd5b61230d611e96565b612316836120b3565b8152612324602084016120b3565b602082015261233684604085016121cd565b604082015260a0830151606082015260c0830151608082015261235c8460e085016120c9565b60a082015261014083015160c082015261016083015160e08201526101808301516101008201526101a09092015161012083015250919050565b6001600160a01b038316815260608101611620602083018480518252602090810151511515910152565b634e487b7160e01b600052601160045260246000fd5b600082198211156123e9576123e96123c0565b500190565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0383168152815160208083019190915282015151805160a08301919061243081611d6e565b80604085015250602081015115156060840152604081015115156080840152509392505050565b8060005b60038110156108285781516001600160a01b031684526020938401939091019060010161245b565b8060005b6001811015610828578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612487565b81516001600160a01b031681526101c0810160208301516124ed60208401826001600160a01b03169052565b5060408301516125006040840182612457565b50606083015160a0830152608083015160c083015260a083015161252760e0840182612483565b5060c083015161014083015260e0830151610160830152610100830151610180830152610120909201516101a09091015290565b634e487b7160e01b600052601260045260246000fd5b6000826125805761258061255b565b500690565b81516001600160a01b031681526101c0810160208301516125b160208401826001600160a01b03169052565b5060408301516125c46040840182612457565b50606083015180151560a084015250608083015160c083015260a083015160e083015260c0830151610100818185015260e0850151915061012061260a81860184612483565b81860151610180860152808601516101a086015250505092915050565b6000826126365761263661255b565b500490565b60008282101561264d5761264d6123c0565b500390565b6000600019821415612666576126666123c0565b5060010190565b6000825161267f818460208701611dce565b9190910192915050565b60006020828403121561269b57600080fd5b815161162081611edd56fea264697066735822122020f6879a2aba5f6b10868f690f774aba21ec846c3b687613420d1f246126659164736f6c634300080c0033`,
  BytecodeLen: 11351,
  Which: `oD`,
  version: 7,
  views: {
    time: {
      seeTime: `time_seeTime`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:37:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:102:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:43:70:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:61:17:after expr stmt semicolon',
    fs: ['at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:11:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:66:18:application call to "closeTo" (defined at: reach standard library:198:8:function exp)', 'at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:11:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob,
  "Charles_inform": Charles_inform,
  "Charles_joinBenefactor": Charles_joinBenefactor
  };
export const _APIs = {
  Charles: {
    inform: Charles_inform,
    joinBenefactor: Charles_joinBenefactor
    }
  };
