/* ENCODE DEGREE MASK 1 */
var BME_mask = 15728640;	//00000000111100000000000000000000
var BSE_mask = 983040;		//00000000000011110000000000000000
var CEE_mask = 61440;		//00000000000000001111000000000000
var CHE_mask = 3840;		//00000000000000000000111100000000
var CMPE_mask = 240;		//00000000000000000000000011110000
var CS_mask = 15;		//00000000000000000000000000001111

var degree_mask_1_array = {
	BME: BME_mask, 
	BSE: BSE_mask, 
	CEE: CEE_mask, 
	CHE: CHE_mask, 
	CMPE: CMPE_mask, 
	CS: CS_mask
};

/* ENCODE DEGREE MASK 2 */
var EE_mask = 15728640;		//00000000111100000000000000000000
var EMA_mask = 983040;		//00000000000011110000000000000000
var ENG_mask = 61440;		//00000000000000001111000000000000
var EP_mask = 3840;		//00000000000000000000111100000000
var GLE_mask = 240;		//00000000000000000000000011110000
var IE_mask = 15;		//00000000000000000000000000001111

var degree_mask_2_array = {
	EE: EE_mask, 
	EMA: EMA_mask, 
	ENG: ENG_mask, 
	EP: EP_mask, 
	GLE: GLE_mask, 
	IE: IE_mask
};

/* ENCODE DEGREE MASK 3 */
var MatE_mask = 983040;		//00000000000011110000000000000000
var ME_mask = 61440;		//00000000000000001111000000000000
var MS_mask = 3840;		//00000000000000000000111100000000
var MSE_mask = 240;		//00000000000000000000000011110000
var NEEP_mask = 15;		//00000000000000000000000000001111

var degree_mask_3_array = {
	MatE: MatE_mask, 
	ME: ME_mask, 
	MS: MS_mask, 
	MSE: MSE_mask, 
	NEEP: NEEP_mask
};

/* ENCODE POSITION MASK */
var I_mask = 8947848;		//00000000100010001000100010001000
var C_mask = 4473924;		//00000000010001000100010001000100
var E_mask = 2236962;		//00000000001000100010001000100010
var X_mask = 1118481;		//00000000000100010001000100010001

var position_mask_array = {
	I: I_mask, 
	C: C_mask, 
	E: E_mask, 
	X: X_mask
};

/* ENCODE CITIZEN MASK */
var US_mask = 4;	//100
var PR_mask = 2;	//010
var VH_mask = 1;	//001
