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
  const ctc6 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc7
    });
  const map0_ctc = ctc8;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc5],
      4: [ctc0, ctc1, ctc3, ctc2, ctc6, ctc5, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc5]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v327 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v328 = [v327];
  const v332 = stdlib.protect(ctc2, interact.bal, 'for Deployer\'s interact field bal');
  const v333 = stdlib.protect(ctc3, interact.token, 'for Deployer\'s interact field token');
  
  const txn1 = await (ctc.sendrecv({
    args: [v333, v332],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:21:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:21:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v337, v338], secs: v340, time: v339, didSend: v29, from: v336 } = txn1;
      
      const v341 = v328[stdlib.checkedBigNumberify('./index.rsh:21:5:dot', stdlib.UInt_max, '0')];
      const v343 = v341[stdlib.checkedBigNumberify('./index.rsh:21:5:dot', stdlib.UInt_max, '1')];
      const v344 = v341[stdlib.checkedBigNumberify('./index.rsh:21:5:dot', stdlib.UInt_max, '2')];
      const v345 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v343, v344];
      const v346 = stdlib.Array_set(v328, stdlib.checkedBigNumberify('./index.rsh:21:5:dot', stdlib.UInt_max, '0'), v345);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v337
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v337, v338], secs: v340, time: v339, didSend: v29, from: v336 } = txn1;
  const v341 = v328[stdlib.checkedBigNumberify('./index.rsh:21:5:dot', stdlib.UInt_max, '0')];
  const v343 = v341[stdlib.checkedBigNumberify('./index.rsh:21:5:dot', stdlib.UInt_max, '1')];
  const v344 = v341[stdlib.checkedBigNumberify('./index.rsh:21:5:dot', stdlib.UInt_max, '2')];
  const v345 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v343, v344];
  const v346 = stdlib.Array_set(v328, stdlib.checkedBigNumberify('./index.rsh:21:5:dot', stdlib.UInt_max, '0'), v345);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v336, v337, v338, v346],
    evt_cnt: 0,
    funcNum: 1,
    lct: v339,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:5:dot', stdlib.UInt_max, '0'), [[v338, v337]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v350, time: v349, didSend: v36, from: v348 } = txn2;
      
      ;
      const v351 = v346[stdlib.checkedBigNumberify('./index.rsh:23:5:dot', stdlib.UInt_max, '0')];
      const v352 = v351[stdlib.checkedBigNumberify('./index.rsh:23:5:dot', stdlib.UInt_max, '0')];
      const v353 = stdlib.add(v352, v338);
      const v356 = v351[stdlib.checkedBigNumberify('./index.rsh:23:5:dot', stdlib.UInt_max, '1')];
      const v357 = v351[stdlib.checkedBigNumberify('./index.rsh:23:5:dot', stdlib.UInt_max, '2')];
      const v358 = [v353, v356, v357];
      const v359 = stdlib.Array_set(v346, stdlib.checkedBigNumberify('./index.rsh:23:5:dot', stdlib.UInt_max, '0'), v358);
      sim_r.txns.push({
        amt: v338,
        kind: 'to',
        tok: v337
        });
      
      
      const v364 = [v336, v336, v336, v336, v336];
      const v366 = true;
      const v367 = stdlib.checkedBigNumberify('./index.rsh:30:63:decimal', stdlib.UInt_max, '0');
      const v368 = v364;
      const v369 = v349;
      const v375 = v359;
      const v376 = stdlib.checkedBigNumberify('./index.rsh:15:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v379 = stdlib.lt(v367, stdlib.checkedBigNumberify('./index.rsh:32:33:decimal', stdlib.UInt_max, '4'));
        const v380 = v366 ? v379 : false;
        
        return v380;})()) {
        const v387 = stdlib.add(v369, stdlib.checkedBigNumberify('./index.rsh:50:27:decimal', stdlib.UInt_max, '2500'));
        sim_r.isHalt = false;
        }
      else {
        const v429 = v375[stdlib.checkedBigNumberify('./index.rsh:55:24:application', stdlib.UInt_max, '0')];
        const v430 = v429[stdlib.checkedBigNumberify('./index.rsh:55:24:application', stdlib.UInt_max, '0')];
        const v431 = stdlib.div(v430, stdlib.checkedBigNumberify('./index.rsh:55:34:decimal', stdlib.UInt_max, '5'));
        const v432 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '0')];
        const v433 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '1')];
        const v434 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '2')];
        const v435 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '3')];
        const v436 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '4')];
        const v442 = stdlib.sub(v430, v431);
        const v445 = v429[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
        const v446 = v429[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
        const v447 = [v442, v445, v446];
        const v448 = stdlib.Array_set(v375, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v447);
        sim_r.txns.push({
          kind: 'from',
          to: v432,
          tok: v337
          });
        const v449 = v448[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v450 = v449[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v454 = stdlib.sub(v450, v431);
        const v457 = v449[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
        const v458 = v449[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
        const v459 = [v454, v457, v458];
        const v460 = stdlib.Array_set(v448, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v459);
        sim_r.txns.push({
          kind: 'from',
          to: v433,
          tok: v337
          });
        const v461 = v460[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v462 = v461[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v466 = stdlib.sub(v462, v431);
        const v469 = v461[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
        const v470 = v461[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
        const v471 = [v466, v469, v470];
        const v472 = stdlib.Array_set(v460, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v471);
        sim_r.txns.push({
          kind: 'from',
          to: v434,
          tok: v337
          });
        const v473 = v472[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v474 = v473[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v478 = stdlib.sub(v474, v431);
        const v481 = v473[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
        const v482 = v473[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
        const v483 = [v478, v481, v482];
        const v484 = stdlib.Array_set(v472, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v483);
        sim_r.txns.push({
          kind: 'from',
          to: v435,
          tok: v337
          });
        const v485 = v484[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v486 = v485[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v490 = stdlib.sub(v486, v431);
        const v493 = v485[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
        const v494 = v485[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
        const v495 = [v490, v493, v494];
        const v496 = stdlib.Array_set(v484, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v495);
        sim_r.txns.push({
          kind: 'from',
          to: v436,
          tok: v337
          });
        const v497 = v496[stdlib.checkedBigNumberify('./index.rsh:63:21:application', stdlib.UInt_max, '0')];
        const v498 = v497[stdlib.checkedBigNumberify('./index.rsh:63:21:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v336,
          tok: v337
          });
        sim_r.txns.push({
          kind: 'from',
          to: v336,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v337
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
    tys: [ctc6, ctc3, ctc2, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v350, time: v349, didSend: v36, from: v348 } = txn2;
  ;
  const v351 = v346[stdlib.checkedBigNumberify('./index.rsh:23:5:dot', stdlib.UInt_max, '0')];
  const v352 = v351[stdlib.checkedBigNumberify('./index.rsh:23:5:dot', stdlib.UInt_max, '0')];
  const v353 = stdlib.add(v352, v338);
  const v356 = v351[stdlib.checkedBigNumberify('./index.rsh:23:5:dot', stdlib.UInt_max, '1')];
  const v357 = v351[stdlib.checkedBigNumberify('./index.rsh:23:5:dot', stdlib.UInt_max, '2')];
  const v358 = [v353, v356, v357];
  const v359 = stdlib.Array_set(v346, stdlib.checkedBigNumberify('./index.rsh:23:5:dot', stdlib.UInt_max, '0'), v358);
  ;
  const v360 = stdlib.addressEq(v336, v348);
  stdlib.assert(v360, {
    at: './index.rsh:23:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  stdlib.protect(ctc0, await interact.inform(), {
    at: './index.rsh:24:20:application',
    fs: ['at ./index.rsh:24:20:application call to [unknown function] (defined at: ./index.rsh:24:20:function exp)', 'at ./index.rsh:24:20:application call to "liftedInteract" (defined at: ./index.rsh:24:20:application)'],
    msg: 'inform',
    who: 'Deployer'
    });
  
  stdlib.protect(ctc0, await interact.inform(), {
    at: './index.rsh:25:20:application',
    fs: ['at ./index.rsh:25:20:application call to [unknown function] (defined at: ./index.rsh:25:20:function exp)', 'at ./index.rsh:25:20:application call to "liftedInteract" (defined at: ./index.rsh:25:20:application)'],
    msg: 'inform',
    who: 'Deployer'
    });
  
  const v364 = [v336, v336, v336, v336, v336];
  let v366 = true;
  let v367 = stdlib.checkedBigNumberify('./index.rsh:30:63:decimal', stdlib.UInt_max, '0');
  let v368 = v364;
  let v369 = v349;
  let v375 = v359;
  let v376 = stdlib.checkedBigNumberify('./index.rsh:15:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v379 = stdlib.lt(v367, stdlib.checkedBigNumberify('./index.rsh:32:33:decimal', stdlib.UInt_max, '4'));
    const v380 = v366 ? v379 : false;
    
    return v380;})()) {
    const v387 = stdlib.add(v369, stdlib.checkedBigNumberify('./index.rsh:50:27:decimal', stdlib.UInt_max, '2500'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: ['time', v387],
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
      const {data: [v419], secs: v421, time: v420, didSend: v179, from: v418 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v422 = false;
      await txn4.getOutput('Users_contractOver', 'v422', ctc5, v422);
      const cv366 = false;
      const cv367 = v367;
      const cv368 = v368;
      const cv369 = v420;
      const cv375 = v375;
      const cv376 = v376;
      
      v366 = cv366;
      v367 = cv367;
      v368 = cv368;
      v369 = cv369;
      v375 = cv375;
      v376 = cv376;
      
      continue;
      }
    else {
      const {data: [v401], secs: v403, time: v402, didSend: v144, from: v400 } = txn3;
      undefined /* setApiDetails */;
      ;
      await txn3.getOutput('Users_whitelist', 'v367', ctc2, v367);
      await stdlib.mapSet(map0, v400, null);
      const v412 = stdlib.Array_set(v368, v367, v400);
      const v413 = stdlib.add(v367, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, '1'));
      const cv366 = v366;
      const cv367 = v413;
      const cv368 = v412;
      const cv369 = v402;
      const cv375 = v375;
      const cv376 = v376;
      
      v366 = cv366;
      v367 = cv367;
      v368 = cv368;
      v369 = cv369;
      v375 = cv375;
      v376 = cv376;
      
      continue;}
    
    }
  const v429 = v375[stdlib.checkedBigNumberify('./index.rsh:55:24:application', stdlib.UInt_max, '0')];
  const v430 = v429[stdlib.checkedBigNumberify('./index.rsh:55:24:application', stdlib.UInt_max, '0')];
  const v431 = stdlib.div(v430, stdlib.checkedBigNumberify('./index.rsh:55:34:decimal', stdlib.UInt_max, '5'));
  const v432 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '0')];
  const v433 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '1')];
  const v434 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '2')];
  const v435 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '3')];
  const v436 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '4')];
  const v442 = stdlib.sub(v430, v431);
  const v445 = v429[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
  const v446 = v429[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
  const v447 = [v442, v445, v446];
  const v448 = stdlib.Array_set(v375, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v447);
  ;
  const v449 = v448[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v450 = v449[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v454 = stdlib.sub(v450, v431);
  const v457 = v449[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
  const v458 = v449[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
  const v459 = [v454, v457, v458];
  const v460 = stdlib.Array_set(v448, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v459);
  ;
  const v461 = v460[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v462 = v461[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v466 = stdlib.sub(v462, v431);
  const v469 = v461[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
  const v470 = v461[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
  const v471 = [v466, v469, v470];
  const v472 = stdlib.Array_set(v460, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v471);
  ;
  const v473 = v472[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v474 = v473[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v478 = stdlib.sub(v474, v431);
  const v481 = v473[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
  const v482 = v473[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
  const v483 = [v478, v481, v482];
  const v484 = stdlib.Array_set(v472, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v483);
  ;
  const v485 = v484[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v486 = v485[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v490 = stdlib.sub(v486, v431);
  const v493 = v485[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
  const v494 = v485[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
  const v495 = [v490, v493, v494];
  const v496 = stdlib.Array_set(v484, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v495);
  ;
  const v497 = v496[stdlib.checkedBigNumberify('./index.rsh:63:21:application', stdlib.UInt_max, '0')];
  const v498 = v497[stdlib.checkedBigNumberify('./index.rsh:63:21:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function _Users_contractOver4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Users_contractOver4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Users_contractOver4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Tuple([ctc5, ctc5, ctc4]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v336, v337, v366, v367, v368, v375, v376, v387] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc6, ctc8, ctc5, ctc5]);
  const v417 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:51:7:application',
    fs: ['at ./index.rsh:51:7:application call to [unknown function] (defined at: ./index.rsh:51:7:function exp)', 'at ./index.rsh:50:37:application call to [unknown function] (defined at: ./index.rsh:50:37:function exp)'],
    msg: 'in',
    who: 'Users_contractOver'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v336, v337, v366, v367, v368, v375, v376, v387, v417],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v419], secs: v421, time: v420, didSend: v179, from: v418 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Users_contractOver"
        });
      ;
      const v422 = false;
      const v423 = await txn1.getOutput('Users_contractOver', 'v422', ctc4, v422);
      
      const v639 = v375[stdlib.checkedBigNumberify('./index.rsh:55:24:application', stdlib.UInt_max, '0')];
      const v640 = v639[stdlib.checkedBigNumberify('./index.rsh:55:24:application', stdlib.UInt_max, '0')];
      const v641 = stdlib.div(v640, stdlib.checkedBigNumberify('./index.rsh:55:34:decimal', stdlib.UInt_max, '5'));
      const v642 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '0')];
      const v643 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '1')];
      const v644 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '2')];
      const v645 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '3')];
      const v646 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '4')];
      const v647 = stdlib.sub(v640, v641);
      const v648 = v639[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
      const v649 = v639[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
      const v650 = [v647, v648, v649];
      const v651 = stdlib.Array_set(v375, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v650);
      sim_r.txns.push({
        kind: 'from',
        to: v642,
        tok: v337
        });
      const v652 = v651[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
      const v653 = v652[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
      const v654 = stdlib.sub(v653, v641);
      const v655 = v652[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
      const v656 = v652[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
      const v657 = [v654, v655, v656];
      const v658 = stdlib.Array_set(v651, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v657);
      sim_r.txns.push({
        kind: 'from',
        to: v643,
        tok: v337
        });
      const v659 = v658[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
      const v660 = v659[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
      const v661 = stdlib.sub(v660, v641);
      const v662 = v659[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
      const v663 = v659[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
      const v664 = [v661, v662, v663];
      const v665 = stdlib.Array_set(v658, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v664);
      sim_r.txns.push({
        kind: 'from',
        to: v644,
        tok: v337
        });
      const v666 = v665[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
      const v667 = v666[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
      const v668 = stdlib.sub(v667, v641);
      const v669 = v666[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
      const v670 = v666[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
      const v671 = [v668, v669, v670];
      const v672 = stdlib.Array_set(v665, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v671);
      sim_r.txns.push({
        kind: 'from',
        to: v645,
        tok: v337
        });
      const v673 = v672[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
      const v674 = v673[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
      const v675 = stdlib.sub(v674, v641);
      const v676 = v673[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
      const v677 = v673[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
      const v678 = [v675, v676, v677];
      const v679 = stdlib.Array_set(v672, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v678);
      sim_r.txns.push({
        kind: 'from',
        to: v646,
        tok: v337
        });
      const v680 = v679[stdlib.checkedBigNumberify('./index.rsh:63:21:application', stdlib.UInt_max, '0')];
      const v681 = v680[stdlib.checkedBigNumberify('./index.rsh:63:21:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v336,
        tok: v337
        });
      sim_r.txns.push({
        kind: 'from',
        to: v336,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v337
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
    tys: [ctc2, ctc3, ctc4, ctc5, ctc6, ctc8, ctc5, ctc5, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v419], secs: v421, time: v420, didSend: v179, from: v418 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v422 = false;
  const v423 = await txn1.getOutput('Users_contractOver', 'v422', ctc4, v422);
  stdlib.protect(ctc0, await interact.out(v419, v423), {
    at: './index.rsh:51:7:application',
    fs: ['at ./index.rsh:51:7:application call to [unknown function] (defined at: ./index.rsh:51:7:function exp)', 'at ./index.rsh:52:8:application call to "k" (defined at: ./index.rsh:51:7:function exp)', 'at ./index.rsh:50:37:application call to [unknown function] (defined at: ./index.rsh:50:37:function exp)'],
    msg: 'out',
    who: 'Users_contractOver'
    });
  
  const v639 = v375[stdlib.checkedBigNumberify('./index.rsh:55:24:application', stdlib.UInt_max, '0')];
  const v640 = v639[stdlib.checkedBigNumberify('./index.rsh:55:24:application', stdlib.UInt_max, '0')];
  const v641 = stdlib.div(v640, stdlib.checkedBigNumberify('./index.rsh:55:34:decimal', stdlib.UInt_max, '5'));
  const v642 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '0')];
  const v643 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '1')];
  const v644 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '2')];
  const v645 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '3')];
  const v646 = v368[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '4')];
  const v647 = stdlib.sub(v640, v641);
  const v648 = v639[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
  const v649 = v639[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
  const v650 = [v647, v648, v649];
  const v651 = stdlib.Array_set(v375, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v650);
  ;
  const v652 = v651[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v653 = v652[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v654 = stdlib.sub(v653, v641);
  const v655 = v652[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
  const v656 = v652[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
  const v657 = [v654, v655, v656];
  const v658 = stdlib.Array_set(v651, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v657);
  ;
  const v659 = v658[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v660 = v659[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v661 = stdlib.sub(v660, v641);
  const v662 = v659[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
  const v663 = v659[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
  const v664 = [v661, v662, v663];
  const v665 = stdlib.Array_set(v658, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v664);
  ;
  const v666 = v665[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v667 = v666[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v668 = stdlib.sub(v667, v641);
  const v669 = v666[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
  const v670 = v666[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
  const v671 = [v668, v669, v670];
  const v672 = stdlib.Array_set(v665, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v671);
  ;
  const v673 = v672[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v674 = v673[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
  const v675 = stdlib.sub(v674, v641);
  const v676 = v673[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
  const v677 = v673[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
  const v678 = [v675, v676, v677];
  const v679 = stdlib.Array_set(v672, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v678);
  ;
  const v680 = v679[stdlib.checkedBigNumberify('./index.rsh:63:21:application', stdlib.UInt_max, '0')];
  const v681 = v680[stdlib.checkedBigNumberify('./index.rsh:63:21:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  };
export async function _Users_whitelist4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Users_whitelist4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Users_whitelist4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Tuple([ctc5, ctc5, ctc4]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v336, v337, v366, v367, v368, v375, v376, v387] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc5, ctc6, ctc8, ctc5, ctc5]);
  const v389 = ctc.selfAddress();
  const v391 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:36:10:application call to [unknown function] (defined at: ./index.rsh:36:10:function exp)', 'at ./index.rsh:36:10:application call to [unknown function] (defined at: ./index.rsh:36:10:function exp)'],
    msg: 'in',
    who: 'Users_whitelist'
    });
  const v393 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v389), null);
  let v394;
  switch (v393[0]) {
    case 'None': {
      const v395 = v393[1];
      v394 = false;
      
      break;
      }
    case 'Some': {
      const v396 = v393[1];
      v394 = true;
      
      break;
      }
    }
  const v397 = v394 ? false : true;
  stdlib.assert(v397, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:37:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:36:10:application call to [unknown function] (defined at: ./index.rsh:36:10:function exp)', 'at ./index.rsh:36:10:application call to [unknown function] (defined at: ./index.rsh:36:10:function exp)', 'at ./index.rsh:36:10:application call to [unknown function] (defined at: ./index.rsh:36:10:function exp)'],
    msg: 'Already a member',
    who: 'Users_whitelist'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v336, v337, v366, v367, v368, v375, v376, v387, v391],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v401], secs: v403, time: v402, didSend: v144, from: v400 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Users_whitelist"
        });
      ;
      const v405 = await txn1.getOutput('Users_whitelist', 'v367', ctc5, v367);
      
      await stdlib.simMapSet(sim_r, 0, v400, null);
      const v412 = stdlib.Array_set(v368, v367, v400);
      const v413 = stdlib.add(v367, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, '1'));
      const v682 = v366;
      const v683 = v413;
      const v684 = v412;
      const v686 = v375;
      const v687 = v376;
      const v688 = stdlib.lt(v413, stdlib.checkedBigNumberify('./index.rsh:32:33:decimal', stdlib.UInt_max, '4'));
      const v689 = v366 ? v688 : false;
      if (v689) {
        const v690 = stdlib.add(v402, stdlib.checkedBigNumberify('./index.rsh:50:27:decimal', stdlib.UInt_max, '2500'));
        sim_r.isHalt = false;
        }
      else {
        const v691 = v375[stdlib.checkedBigNumberify('./index.rsh:55:24:application', stdlib.UInt_max, '0')];
        const v692 = v691[stdlib.checkedBigNumberify('./index.rsh:55:24:application', stdlib.UInt_max, '0')];
        const v693 = stdlib.div(v692, stdlib.checkedBigNumberify('./index.rsh:55:34:decimal', stdlib.UInt_max, '5'));
        const v694 = v412[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '0')];
        const v695 = v412[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '1')];
        const v696 = v412[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '2')];
        const v697 = v412[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '3')];
        const v698 = v412[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '4')];
        const v699 = stdlib.sub(v692, v693);
        const v700 = v691[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
        const v701 = v691[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
        const v702 = [v699, v700, v701];
        const v703 = stdlib.Array_set(v375, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v702);
        sim_r.txns.push({
          kind: 'from',
          to: v694,
          tok: v337
          });
        const v704 = v703[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v705 = v704[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v706 = stdlib.sub(v705, v693);
        const v707 = v704[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
        const v708 = v704[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
        const v709 = [v706, v707, v708];
        const v710 = stdlib.Array_set(v703, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v709);
        sim_r.txns.push({
          kind: 'from',
          to: v695,
          tok: v337
          });
        const v711 = v710[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v712 = v711[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v713 = stdlib.sub(v712, v693);
        const v714 = v711[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
        const v715 = v711[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
        const v716 = [v713, v714, v715];
        const v717 = stdlib.Array_set(v710, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v716);
        sim_r.txns.push({
          kind: 'from',
          to: v696,
          tok: v337
          });
        const v718 = v717[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v719 = v718[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v720 = stdlib.sub(v719, v693);
        const v721 = v718[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
        const v722 = v718[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
        const v723 = [v720, v721, v722];
        const v724 = stdlib.Array_set(v717, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v723);
        sim_r.txns.push({
          kind: 'from',
          to: v697,
          tok: v337
          });
        const v725 = v724[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v726 = v725[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
        const v727 = stdlib.sub(v726, v693);
        const v728 = v725[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
        const v729 = v725[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
        const v730 = [v727, v728, v729];
        const v731 = stdlib.Array_set(v724, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v730);
        sim_r.txns.push({
          kind: 'from',
          to: v698,
          tok: v337
          });
        const v732 = v731[stdlib.checkedBigNumberify('./index.rsh:63:21:application', stdlib.UInt_max, '0')];
        const v733 = v732[stdlib.checkedBigNumberify('./index.rsh:63:21:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v336,
          tok: v337
          });
        sim_r.txns.push({
          kind: 'from',
          to: v336,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v337
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
    tys: [ctc2, ctc3, ctc4, ctc5, ctc6, ctc8, ctc5, ctc5, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v401], secs: v403, time: v402, didSend: v144, from: v400 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v405 = await txn1.getOutput('Users_whitelist', 'v367', ctc5, v367);
  if (v144) {
    stdlib.protect(ctc0, await interact.out(v401, v405), {
      at: './index.rsh:35:7:application',
      fs: ['at ./index.rsh:35:7:application call to [unknown function] (defined at: ./index.rsh:35:7:function exp)', 'at ./index.rsh:42:10:application call to "k" (defined at: ./index.rsh:41:11:function exp)', 'at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:11:function exp)'],
      msg: 'out',
      who: 'Users_whitelist'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v400, null);
  const v412 = stdlib.Array_set(v368, v367, v400);
  const v413 = stdlib.add(v367, stdlib.checkedBigNumberify('./index.rsh:47:36:decimal', stdlib.UInt_max, '1'));
  const v682 = v366;
  const v683 = v413;
  const v684 = v412;
  const v686 = v375;
  const v687 = v376;
  const v688 = stdlib.lt(v413, stdlib.checkedBigNumberify('./index.rsh:32:33:decimal', stdlib.UInt_max, '4'));
  const v689 = v366 ? v688 : false;
  if (v689) {
    const v690 = stdlib.add(v402, stdlib.checkedBigNumberify('./index.rsh:50:27:decimal', stdlib.UInt_max, '2500'));
    return;
    }
  else {
    const v691 = v375[stdlib.checkedBigNumberify('./index.rsh:55:24:application', stdlib.UInt_max, '0')];
    const v692 = v691[stdlib.checkedBigNumberify('./index.rsh:55:24:application', stdlib.UInt_max, '0')];
    const v693 = stdlib.div(v692, stdlib.checkedBigNumberify('./index.rsh:55:34:decimal', stdlib.UInt_max, '5'));
    const v694 = v412[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '0')];
    const v695 = v412[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '1')];
    const v696 = v412[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '2')];
    const v697 = v412[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '3')];
    const v698 = v412[stdlib.checkedBigNumberify('reach standard library:112:21:application', stdlib.UInt_max, '4')];
    const v699 = stdlib.sub(v692, v693);
    const v700 = v691[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
    const v701 = v691[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
    const v702 = [v699, v700, v701];
    const v703 = stdlib.Array_set(v375, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v702);
    ;
    const v704 = v703[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
    const v705 = v704[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
    const v706 = stdlib.sub(v705, v693);
    const v707 = v704[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
    const v708 = v704[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
    const v709 = [v706, v707, v708];
    const v710 = stdlib.Array_set(v703, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v709);
    ;
    const v711 = v710[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
    const v712 = v711[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
    const v713 = stdlib.sub(v712, v693);
    const v714 = v711[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
    const v715 = v711[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
    const v716 = [v713, v714, v715];
    const v717 = stdlib.Array_set(v710, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v716);
    ;
    const v718 = v717[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
    const v719 = v718[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
    const v720 = stdlib.sub(v719, v693);
    const v721 = v718[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
    const v722 = v718[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
    const v723 = [v720, v721, v722];
    const v724 = stdlib.Array_set(v717, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v723);
    ;
    const v725 = v724[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
    const v726 = v725[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0')];
    const v727 = stdlib.sub(v726, v693);
    const v728 = v725[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '1')];
    const v729 = v725[stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '2')];
    const v730 = [v727, v728, v729];
    const v731 = stdlib.Array_set(v724, stdlib.checkedBigNumberify('./index.rsh:58:33:application', stdlib.UInt_max, '0'), v730);
    ;
    const v732 = v731[stdlib.checkedBigNumberify('./index.rsh:63:21:application', stdlib.UInt_max, '0')];
    const v733 = v732[stdlib.checkedBigNumberify('./index.rsh:63:21:application', stdlib.UInt_max, '0')];
    ;
    ;
    return;
    }
  
  
  };
export async function Users_contractOver(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Users_contractOver expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Users_contractOver expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Users_contractOver4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Users_whitelist(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Users_whitelist expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Users_whitelist expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Users_whitelist4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Users_contractOver()byte`, `Users_whitelist()uint64`],
    pure: [],
    sigs: [`Users_contractOver()byte`, `Users_whitelist()uint64`]
    },
  appApproval: `BiAMAAEEIAjlvcvOBgPqASniAaCNBgUmAwEAAAEBIjUAMRhBBEEpZEkiWzUBIQRbNQIxGSMSQQAIMQAoKGZCBA82GgAXSUEAISI1BCM1BkkhBQxAAAghBRJEKUIAKYGf6IiwBRJEKUIAfzYaAhc1BDYaAzYaARdJIQYMQAD2SSQMQABkJBJEJDQBEkQ0BEkiEkw0AhIRRChkKmRQNQNJNQU1/4AE1OAYLTT/ULAyBjQDIQdbD0SACQAAAAAAAAGmALAoNQc0A1cAIDQDJVsiNAMhCFs0A1cxoDIGNANX0RE0AyEJW0IBjEgkNAESRDQESSISTDQCEhFEKGQqZFBJNQMhCFs1/0k1BTX+gATImg+7NP5QsDIGNAMhB1sMRIAIAAAAAAAAAW80/xZQsDT/FjUHMQAoKmY0A1cAIDQDJVs0A1coARc0/yMINANXMaBJIiU0/wtSMQBQTCVJNP8LCIGgAVJQMgY0A1fRETQDIQlbQgEASSMMQAB1IxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yVbNf6BKFs1/VcwETX8gASai5F0sDT8VwARNfs0/TT+iALhNP8xABJENP80/iMiNP9JUDT/UDT/UDT/UDIGNPsiWzT9CBY0+1cICFA0+1cQAVAiQgCFSCEKiAKQIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/IQRbNf6ABKzRH8M0/xZQNP4WULCBEa9JNf1XABE1/CEErzT8VwgIUDT8VxABUDX7IQqIAkOxIrIBIrISJLIQMgqyFDT/shGzMQA0/xZQNP4WUDT7UChLAVcAQWdIIzUBMgY1AkIBvzX/Nf41/TX8Nfs1+jX5Nfg0+jT7JAwQQQBANP2BxBMINfc0+DT5FlA0+hZRBwhQNPsWUDT8UDT+UDT/FlA09xZQKEsBVwB/ZypLAVd/c2dIJDUBMgY1AkIBZTT+VwARSTX3IltJNfYhCwo19TT2NPUJFjT3VwgIUDT3VxABUDX0sSKyATT1shIkshA0/FcAILIUNPmyEbM09FcAEUk18yJbNPUJFjTzVwgIUDTzVxABUDXysSKyATT1shIkshA0/FcgILIUNPmyEbM08lcAEUk18SJbNPUJFjTxVwgIUDTxVxABUDXwsSKyATT1shIkshA0/FdAILIUNPmyEbM08FcAEUk17yJbNPUJFjTvVwgIUDTvVxABUDXusSKyATT1shIkshA0/FdgILIUNPmyEbM07lcAETXtsSKyATT1shIkshA0/FeAILIUNPmyEbOxIrIBNO0iWzT1CRY07VcICFA07VcQAVBXABEiW7ISJLIQNPiyFDT5shGzsSKyATT/sggjshA0+LIHs7EisgEishIkshAyCbIVMgqyFDT5shGzQgAAMRkhCxJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEGMTUSRCIxNhJEIzE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 2,
  stateSize: 242,
  unsupported: [],
  version: 10,
  warnings: [`API api_Users_contractOver may use up to 6 accounts, but the limit is 4. API api_Users_contractOver starts at /app/index.rsh:51:7:application.`, `API api_Users_whitelist may use up to 6 accounts, but the limit is 4. API api_Users_whitelist starts at /app/index.rsh:30:55:application.`, `Step 1 may use up to 6 accounts, but the limit is 4. Step 1 starts at /app/index.rsh:23:5:dot.`, `Step 3 may use up to 6 accounts, but the limit is 4. Step 3 starts at /app/index.rsh:30:55:dot.`, `Step 4 may use up to 6 accounts, but the limit is 4. Step 4 starts at /app/index.rsh:51:7:dot.`, `This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
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
                "name": "v337",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
                "name": "v337",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
        "internalType": "struct T11",
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
                "internalType": "bool",
                "name": "v401",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
                "name": "v419",
                "type": "bool"
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
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v367",
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
    "name": "_reach_oe_v422",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Users_contractOver",
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
    "name": "Users_whitelist",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
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
        "internalType": "struct T11",
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
                "internalType": "bool",
                "name": "v401",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
                "name": "v419",
                "type": "bool"
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
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620021aa380380620021aa8339810160408190526200002691620003fd565b60008055436003556200003862000230565b6040805133815283516020808301919091528085015180516001600160a01b0316838501520151606082015290517fcf195cf82603ce4a4e34c55fad8b41a7c2cc7f7728b1ba77a8eec293c0fa52d59181900360800190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000ee929062000183565b6060820152620001013415600762000206565b6200010b62000297565b33815260208084018051516001600160a01b0316828401525181015160408084019190915260608085015190840152600160008190554390555162000153918391016200048b565b6040516020818303038152906040526002908051906020019062000179929190620002d3565b5050505062000569565b6200018d62000362565b60005b6001811015620001e357848160018110620001af57620001af62000475565b6020020151828260018110620001c957620001c962000475565b602002015280620001da8162000502565b91505062000190565b5081818460018110620001fa57620001fa62000475565b60200201529392505050565b816200022c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200026362000362565b815260408051606081018252600080825260208281018290529282015291019081526020016200029262000362565b905290565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016200029262000362565b828054620002e1906200052c565b90600052602060002090601f01602090048101928262000305576000855562000350565b82601f106200032057805160ff191683800117855562000350565b8280016001018555821562000350579182015b828111156200035057825182559160200191906001019062000333565b506200035e929150620003af565b5090565b60405180602001604052806001905b62000398604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003715790505090565b5b808211156200035e5760008155600101620003b0565b604080519081016001600160401b0381118282101715620003f757634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200041157600080fd5b6200041b620003c6565b835181526040601f19830112156200043257600080fd5b6200043c620003c6565b60208501519092506001600160a01b03811681146200045a57600080fd5b82526040939093015160208083019190915283015250919050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b039081168252602080840151909116818301526040808401518184015260608085015160c0850193919081860160005b6001811015620004f65782518051835285810151868401528601511515868301529184019190830190600101620004c4565b50505050505092915050565b60006000198214156200052557634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200054157607f821691505b602082108114156200056357634e487b7160e01b600052602260045260246000fd5b50919050565b611c3180620005796000396000f3fe6080604052600436106100845760003560e01c806383230757116100565780638323075714610109578063a98bf2231461011e578063ab53f2c614610131578063db22d63514610154578063e2186a081461015c57005b80631e93b0f11461008d5780632c10a159146100b15780633bc5b7bf146100c45780637006e9d2146100f157005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf36600461151b565b61016f565b3480156100d057600080fd5b506100e46100df36600461154c565b61019f565b6040516100a8919061157f565b6100f96101cb565b60405190151581526020016100a8565b34801561011557600080fd5b5060015461009e565b61008b61012c36600461151b565b610203565b34801561013d57600080fd5b5061014661022f565b6040516100a89291906115f2565b61009e6102cc565b61008b61016a36600461151b565b610307565b604080518082019091526000808252602082015261019b610195368490038401846116c0565b82610333565b5050565b60408051606081018252600080825260208201819052918101919091526101c58261059f565b92915050565b60006101d56111a0565b60208082015160009081905260408051808201909152818152918201526101fc8282610678565b5192915050565b604080518082019091526000808252602082015261019b610229368490038401846117a6565b82610678565b600060606000546002808054610244906117c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610270906117c2565b80156102bd5780601f10610292576101008083540402835291602001916102bd565b820191906000526020600020905b8154815290600101906020018083116102a057829003601f168201915b50505050509050915091509091565b60006102d66111a0565b60208082015160009081905260408051808201909152818152918201526102fd8282610857565b6020015192915050565b604080518082019091526000808252602082015261019b61032d368490038401846117a6565b82610857565b610343600160005414600b610a7e565b815161035e90158061035757508251600154145b600c610a7e565b600080805560028054610370906117c2565b80601f016020809104026020016040519081016040528092919081815260200182805461039c906117c2565b80156103e95780601f106103be576101008083540402835291602001916103e9565b820191906000526020600020905b8154815290600101906020018083116103cc57829003601f168201915b50505050508060200190518101906104019190611896565b905061040b6111cf565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a161045e34156008610a7e565b604082015160608301515151610474919061193d565b81515260608201805151602090810151835182015290515160409081015183519015159082015290830151908301516104ba916104b391339190610aa4565b6009610a7e565b81516104d2906001600160a01b03163314600a610a7e565b8151602082810180516001600160a01b0393841690528451815190841692019190915283518151908316604090910152835181519083166060909101528351905191166080909101526105236111ff565b825181516001600160a01b03918216905260208085015183519216918101919091528082018051600190528051600090830181905291840151815160400152514360609182015284015183516105799290610abc565b6020820180516080019190915251600060a09091015261059881610b30565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156105eb576105eb611569565b1415610668576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561062c5761062c611569565b600181111561063d5761063d611569565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b6106886004600054146012610a7e565b81516106a390158061069c57508251600154145b6013610a7e565b6000808055600280546106b5906117c2565b80601f01602080910402602001604051908101604052809291908181526020018280546106e1906117c2565b801561072e5780601f106107035761010080835404028352916020019161072e565b820191906000526020600020905b81548152906001019060200180831161071157829003601f168201915b505050505080602001905181019061074691906119cc565b905061075a8160e001514310156014610a7e565b7f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b94338460405161078b929190611a60565b60405180910390a161079f34156011610a7e565b604051600081527f5ea190c0ccf150c7af6c56c82d6a634174d696b64a21dfae60e073440d8155619060200160405180910390a1600082526107df6111ff565b815181516001600160a01b039182169052602080840151835192169181019190915280820180516000905260608085015182519093019290925260808085015182516040015281514393019290925260a08085015182519093019290925260c084015190519091015261085181610b30565b50505050565b610867600460005414600e610a7e565b815161088290158061087b57508251600154145b600f610a7e565b600080805560028054610894906117c2565b80601f01602080910402602001604051908101604052809291908181526020018280546108c0906117c2565b801561090d5780601f106108e25761010080835404028352916020019161090d565b820191906000526020600020905b8154815290600101906020018083116108f057829003601f168201915b505050505080602001905181019061092591906119cc565b90506109388160e0015143106010610a7e565b7fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e353384604051610969929190611a60565b60405180910390a161097d3415600d610a7e565b7f9e3715271bc042f2a7c6d238a59341248f2826d77a557c1411446a2699252c4381606001516040516109b291815260200190565b60405180910390a16060810151602083810191909152336000908152600490915260409020805462ff00ff191660011790556109ec6111ff565b815181516001600160a01b039182169052602080840151835192169181019190915260408301519082015190151590526060820151610a2d9060019061193d565b602080830151015260808201516060830151610a4a919033610f11565b6020820180516040019190915280514360609091015260a08084015182516080015260c08401519151015261085181610b30565b8161019b5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610ab283853085610fa1565b90505b9392505050565b610ac4611228565b60005b6001811015610b1057848160018110610ae257610ae2611911565b6020020151828260018110610af957610af9611911565b602002015280610b0881611a8a565b915050610ac7565b5081818460018110610b2457610b24611911565b60200201529392505050565b610b38611273565b602082015151610b49576000610b56565b6004826020015160200151105b15610c1c576109c4826020015160600151610b71919061193d565b8152610b7b61136a565b8251516001600160a01b03908116825283516020908101519091168183015280840180515115156040808501919091528151830151606085015281518101516080808601919091528251015160a08086019190915291519091015160c0840152835160e084015260046000554360015551610bf891839101611b0f565b604051602081830303815290604052600290805190602001906108519291906113cf565b6020820151608001515151610c3390600590611b89565b6020828101829052830151608001515151610c4e9190611bab565b604082810180519290925260208481018051608090810151518301518551909301929092528051820151518301518451901515930192909252905101519051610c9a9190600090610abc565b606082015281516020908101519083015160400151610cc6919060005b6020020151836020015161107b565b602081015160608201515151610cdc9190611bab565b60808201805191909152606082018051516020908101518351909101528051516040908101518351901515910152519051610d1a9190600090610abc565b60a082015281516020908101519083015160400151610d3b91906001610cb7565b602081015160a08201515151610d519190611bab565b60c0820180519190915260a082018051516020908101518351909101528051516040908101518351901515910152519051610d8f9190600090610abc565b60e082015281516020908101519083015160400151610db091906002610cb7565b602081015160e08201515151610dc69190611bab565b610100820180519190915260e082018051516020908101518351909101528051516040908101518351901515910152519051610e059190600090610abc565b61012082015281516020908101519083015160400151610e2791906003610cb7565b60208101516101208201515151610e3e9190611bab565b61014082018051919091526101208201805151602090810151835182015290515160409081015192519215159281019290925283518101519084015190910151610e8a91906004610cb7565b815160208101519051610120830151610140840151610eb8939291610eb191600090610abc565b515161107b565b815151602083015160a001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610efa573d6000803e3d6000fd5b506000808055600181905561019b90600290611453565b610f19611490565b60005b6005811015610f7357848160058110610f3757610f37611911565b6020020151828260058110610f4e57610f4e611911565b6001600160a01b03909216602092909202015280610f6b81611a8a565b915050610f1c565b5081818460058110610f8757610f87611911565b6001600160a01b0390921660209290920201529392505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161100891611bc2565b60006040518083038185875af1925050503d8060008114611045576040519150601f19603f3d011682016040523d82523d6000602084013e61104a565b606091505b509150915061105b82826001611094565b50808060200190518101906110709190611bde565b979650505050505050565b6110868383836110cf565b61108f57600080fd5b505050565b606083156110a3575081610ab5565b8251156110b35782518084602001fd5b60405163100960cb60e01b815260048101839052602401610a9b565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161112e91611bc2565b60006040518083038185875af1925050503d806000811461116b576040519150601f19603f3d011682016040523d82523d6000602084013e611170565b606091505b509150915061118182826002611094565b50808060200190518101906111969190611bde565b9695505050505050565b6040518060400160405280600081526020016111ca60405180602001604052806000151581525090565b905290565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016111ca611490565b6040805160808101825260009181018281526060820192909252908152602081016111ca6114ae565b60405180602001604052806001905b61125d604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816112375790505090565b60405180610160016040528060008152602001600081526020016112b3604051806060016040528060008152602001600081526020016000151581525090565b81526020016112c0611228565b815260408051606081018252600080825260208281018290529282015291019081526020016112ed611228565b8152604080516060810182526000808252602082810182905292820152910190815260200161131a611228565b81526040805160608101825260008082526020828101829052928201529101908152602001611347611228565b815260408051606081018252600080825260208281018290529282015291015290565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600015158152602001600081526020016113ae611490565b81526020016113bb611228565b815260200160008152602001600081525090565b8280546113db906117c2565b90600052602060002090601f0160209004810192826113fd5760008555611443565b82601f1061141657805160ff1916838001178555611443565b82800160010185558215611443579182015b82811115611443578251825591602001919060010190611428565b5061144f9291506114ee565b5090565b50805461145f906117c2565b6000825580601f1061146f575050565b601f01602090049060005260206000209081019061148d91906114ee565b50565b6040518060a001604052806005906020820280368337509192915050565b6040805160c081018252600080825260208201529081016114cd611490565b8152602001600081526020016114e1611228565b8152602001600081525090565b5b8082111561144f57600081556001016114ef565b60006040828403121561151557600080fd5b50919050565b60006040828403121561152d57600080fd5b610ab58383611503565b6001600160a01b038116811461148d57600080fd5b60006020828403121561155e57600080fd5b8135610ab581611537565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106115a457634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60005b838110156115e15781810151838201526020016115c9565b838111156108515750506000910152565b82815260406020820152600082518060408401526116178160608501602087016115c6565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156116655761166561162c565b60405290565b604051610100810167ffffffffffffffff811182821017156116655761166561162c565b6040516020810167ffffffffffffffff811182821017156116655761166561162c565b801515811461148d57600080fd5b6000604082840312156116d257600080fd5b6040516040810181811067ffffffffffffffff821117156116f5576116f561162c565b60405282358152602083013561170a816116b2565b60208201529392505050565b600081830360408082121561172a57600080fd5b805181810167ffffffffffffffff828210818311171561174c5761174c61162c565b818452829550863583526020601f198601121561176857600080fd5b8351945060208501915084821081831117156117865761178661162c565b50909152602084013590611799826116b2565b9082526020015292915050565b6000604082840312156117b857600080fd5b610ab58383611716565b600181811c908216806117d657607f821691505b6020821081141561151557634e487b7160e01b600052602260045260246000fd5b805161067381611537565b8051610673816116b2565b600082601f83011261181e57600080fd5b61182661168f565b8060608085018681111561183957600080fd5b855b8181101561188a578281890312156118535760008081fd5b61185b611642565b8151815260208083015181830152604080840151611878816116b2565b9083015290865290940193820161183b565b50919695505050505050565b600060c082840312156118a857600080fd5b6040516080810181811067ffffffffffffffff821117156118cb576118cb61162c565b60405282516118d981611537565b815260208301516118e981611537565b602082015260408381015190820152611905846060850161180d565b60608201529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561195057611950611927565b500190565b600082601f83011261196657600080fd5b60405160a0810181811067ffffffffffffffff821117156119895761198961162c565b6040528060a084018581111561199e57600080fd5b845b818110156119c15780516119b381611537565b8352602092830192016119a0565b509195945050505050565b60006101c082840312156119df57600080fd5b6119e761166b565b6119f0836117f7565b81526119fe602084016117f7565b6020820152611a0f60408401611802565b604082015260608301516060820152611a2b8460808501611955565b6080820152611a3e84610120850161180d565b60a082015261018083015160c08201526101a09092015160e083015250919050565b6001600160a01b038316815260608101610ab5602083018480518252602090810151511515910152565b6000600019821415611a9e57611a9e611927565b5060010190565b8060005b60058110156108515781516001600160a01b0316845260209384019390910190600101611aa9565b8060005b6001811015610851578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101611ad5565b81516001600160a01b03908116825260208084015190911690820152604080830151151590820152606080830151908201526080808301516101c0830191611b5990840182611aa5565b5060a0830151611b6d610120840182611ad1565b5060c083015161018083015260e0909201516101a09091015290565b600082611ba657634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611bbd57611bbd611927565b500390565b60008251611bd48184602087016115c6565b9190910192915050565b600060208284031215611bf057600080fd5b8151610ab5816116b256fea26469706673582212206dcbde2d44bbc5bf6c1576abdc78ec77254f8944cfb9f485eecd146874a13b3564736f6c634300080c0033`,
  BytecodeLen: 8618,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:22:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:65:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:30:55:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "Users_contractOver": Users_contractOver,
  "Users_whitelist": Users_whitelist
  };
export const _APIs = {
  Users: {
    contractOver: Users_contractOver,
    whitelist: Users_whitelist
    }
  };
