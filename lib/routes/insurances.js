"use strict";var express=require("express"),router=express.Router(),_require=require("../controllers/insurances"),getInsuranceInformation=_require.getInsuranceInformation,addInsuranceInfo=_require.addInsuranceInfo,isCarInsuranceInfoRegistered=_require.isCarInsuranceInfoRegistered,getPersonInformation=_require.getPersonInformation;router.route("/getInfo").get(getInsuranceInformation),router.route("/getPersonInfo/:name").get(getPersonInformation),router.route("/isCarRegistered").post(isCarInsuranceInfoRegistered),router.route("/addInfo").post(addInsuranceInfo),module.exports=router;