import {ESystemPermissionNames} from "./system-permission-names.enum";
import {EPermissionTypes} from "./permission-types.enum";

export const SYSTEM_PERMISSION_INDEXES = {
    [ESystemPermissionNames.Invite]: `${ESystemPermissionNames.Invite}.${EPermissionTypes.System}`,
    [ESystemPermissionNames.Fire]: `${ESystemPermissionNames.Fire}.${EPermissionTypes.System}`,
    [ESystemPermissionNames.ManageFields]: `${ESystemPermissionNames.ManageFields}.${EPermissionTypes.System}`,
    [ESystemPermissionNames.ManageObjects]: `${ESystemPermissionNames.ManageObjects}.${EPermissionTypes.System}`,
}