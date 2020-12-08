const express = require('express');
const router = express.Router();
const {
    getInsuranceInformation,
    addInsuranceInfo,
    isCarInsuranceInfoRegistered,
    getPersonInformation
} = require('../controllers/insurances');

router
    .route('/getInfo')
    .get(getInsuranceInformation);

router
    .route('/getPersonInfo/:name')
    .get(getPersonInformation);

router.route('/isCarRegistered')
    .post(isCarInsuranceInfoRegistered);

router.route('/addInfo')
    .post(addInsuranceInfo);

module.exports = router;