const express = require('express');
const { create, view, details, update, changeStatus, destroy } = require('../../Controllers/Admin/materialController');

const router = express.Router();

module.exports = app => {

    router.post('/create', create);

    router.post('/view', view);

    router.post('/details/:id', details);

    router.put('/update/:id', update);

    router.post('/change-status', changeStatus);

    router.delete('/delete', destroy);

    app.use('/api/admin-panel/material', router);
}