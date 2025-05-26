
{

//

    
    //* ::: Module 3, OPP(type guard) ::: *//

    /* 
    * With code duplication we can create class
    * Class is blue print of obejct. 
    * we can make object using class. 
    *
    * */

    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string,
        role: "admin"
    }
    type PermissionLevel = AdminUser | NormalUser

    const getUserInfo = (param: PermissionLevel) => {
        if('role' in param) {
            console.log(`my name is ${param.name}. my role is ${param.role}`)
        } else {
            console.log(`my name is ${param.name}. I am normal user`)
        }
    }

    const normalUser : NormalUser = {
        name: "shirin khan"
    }
    const adminUser: AdminUser = {
        name: "Mahadi Hasan",
        role: "admin"
    }
    getUserInfo(normalUser)
    getUserInfo(adminUser)

//

}