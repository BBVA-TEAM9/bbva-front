import React from "react";
import { getPermission } from "../util/auth";

export const validateChequeoPermission = () => {
    const p = []
    const per = getPermission().permissions;
    for (let m = 0; m < per.length; m++) {
        p.push(getPermission().permissions[m]['code']);
    }
    if (p.indexOf('VIEW_MOD_CHEQUEO_REPORT') < 0) {
        window.location.href = '/estudios/dashboard'
    }
} 
export const validateAuditPermission = () => {
    const p = []
    const per = getPermission().permissions;
    for (let m = 0; m < per.length; m++) {
        p.push(getPermission().permissions[m]['code']);
    }
    if (p.indexOf('VIEW_MOD_CHEQUEO_REPORT') < 0) {
        window.location.href = '/estudios/dashboard'
    }
} 