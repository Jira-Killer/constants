import {SystemPermissionNames} from "./system-permission-names.enum";
import {PermissionTypes} from "./permission-types.enum";

export const SYSTEM_PERMISSION_INDEXES = {
    [SystemPermissionNames.MANAGE_FIELDS]: `${SystemPermissionNames.MANAGE_FIELDS}.${PermissionTypes.SYSTEM}`,
    [SystemPermissionNames.MANAGE_OBJECTS]: `${SystemPermissionNames.MANAGE_OBJECTS}.${PermissionTypes.SYSTEM}`,
    [SystemPermissionNames.INVITE]: `${SystemPermissionNames.INVITE}.${PermissionTypes.SYSTEM}`,
    [SystemPermissionNames.FIRE]: `${SystemPermissionNames.FIRE}.${PermissionTypes.SYSTEM}`,
}