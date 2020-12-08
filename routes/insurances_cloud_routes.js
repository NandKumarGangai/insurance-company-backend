const express = require('express');
const router = express.Router();
const {
    getInsuranceInformation,
    addInsuranceInfo,
    isCarInsuranceInfoRegistered,
    getPersonInformation
} = require('../controllers/insurances_cloud');

router
    .route('/getInfo')
    .get(getInsuranceInformation);

router
    .route('/getPersonInfo')
    .post(getPersonInformation);

router.route('/addInfo')
    .post(addInsuranceInfo);

router.route('/isCarRegistered')
    .post(isCarInsuranceInfoRegistered);

module.exports = router;