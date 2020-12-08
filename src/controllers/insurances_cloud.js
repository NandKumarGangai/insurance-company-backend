const InsuranceInfo = require('../models/insuranceInfo');

/**
 * @description get getInfo
 * @path        GET /api/v1/cloud/getInfo
 */
exports.getInsuranceInformation = async (req, res, next) => {
    try {
        const trans = await InsuranceInfo.find();

        return res.status(200).json({
            success: true,
            count: trans.length,
            data: trans
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message || 'Server error'
        });
    }
}

/**
 * @description get getPersonInfo
 * @path        GET /api/v1/cloud/getPersonInfo
 */
exports.getPersonInformation = async (req, res, next) => {
    try {
        const trans = await InsuranceInfo.find(req.body);

        return res.status(200).json({
            success: true,
            count: trans.length,
            data: trans
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message || 'Server error'
        });
    }
}

/**
 * @description get isCarRegistered
 * @path        POST /api/v1/cloud/isCarRegistered
 */
exports.isCarInsuranceInfoRegistered = async (req, res, next) => {
    try {
        const trans = await InsuranceInfo.findOne(req.body);

        return res.status(200).json({
            success: true,
            count: trans.length,
            data: trans
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message || 'Server error'
        });
    }
}

/**
 * @description add addInfo
 * @path        POST /api/v1/cloud/addInfo
 */
exports.addInsuranceInfo = async (req, res, next) => {
    try {
        const trans = await InsuranceInfo.create(req.body);

        return res.status(201).json({
            success: true,
            count: trans.length,
            data: trans
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        }
        return res.status(500).json({
            success: false,
            error: error.message || 'Server error'
        });
    }
}
