const { readFile, writeFile } = require("../utils");

const FILENAME = '../config/database.json';

/**
 * @description get getInfo
 * @path        GET /api/v1/getInfo
 */

exports.getInsuranceInformation = async (req, res, next) => {

    try {
        let fileData = JSON.parse(await readFile(FILENAME));

        res.status(200).json({
            success: true,
            count: fileData.length,
            data: fileData,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
};

/**
 * @description get getPersonInfo
 * @path        GET /api/v1/getPersonInfo
 */
exports.getPersonInformation = async (req, res, next) => {
    const { name } = req.params;

    try {
        const fileData = readFile(FILENAME);
        const value = JSON.parse(fileData).filter(
            (obj) => obj.name.toLowerCase() === name.toLowerCase()
        );

        if (value.length) {
            res.status(200).json({
                success: true,
                count: value.length,
                data: value,
            });
        } else {
            res.status(201).json({
                success: true,
                data: [],
                count: 0,
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
};

/**
 * @description get isCarRegistered
 * @path        POST /api/v1/isCarRegistered
 */
exports.isCarInsuranceInfoRegistered = async (req, res, next) => {
    const { car_model, car_make_year } = req.body;

    try {
        const fileData = readFile(FILENAME);
        const value = JSON.parse(fileData).filter(
            (obj) => obj.car_model.toLowerCase() === car_model.toLowerCase() && obj.car_make_year.toLowerCase() === car_make_year.toLowerCase()
        );

        if (value.length) {
            res.status(200).json({
                success: true,
                count: value.length,
                data: value,
            });
        } else {
            res.status(201).json({
                success: true,
                data: [],
                count: 0,
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
};

/**
 * @description add addInfo
 * @path        POST /api/v1/addInfo
 */
exports.addInsuranceInfo = async (req, res, next) => {
    const {
        name,
        age,
        contact_number,
        car_model,
        car_make_year
    } = req.body;

    const record = {
        name,
        age,
        contact_number,
        car_model,
        car_make_year
    }

    try {
        const fileData = JSON.parse(readFile(FILENAME));
        const index = fileData.findIndex((obj) => obj.name === record.name);

        if (index === -1) {
            fileData.push(record);
            writeFile(FILENAME, JSON.stringify(fileData));
            res.status(200).json({
                success: true,
                count: 1,
                data: record,
            });
        } else {
            res.status(400).json({
                success: false,
                message: "record already exists!",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
};