import { inject } from "@angular/core";
import { UsuariosServices } from "../services/users.service";
import { Router } from "@angular/router";
import { getUsers } from "src/config/config";

function checkIFLogout() {
    const userService = inject(UsuariosServices);
    const router = inject(Router);

    getUsers().then((users) => {
        userService.users = users;
        userService.validateLogin();
        if (userService.user.getId != "0") {
            router.navigate(["/home"]);
            return false;
        } else {
            return true
        }
    });
}

export const LogoutGuard = () => {
    return checkIFLogout();
}