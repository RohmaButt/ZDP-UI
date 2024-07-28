import { UserData } from "./types";

 export const getRoleId = (user: UserData | null) => {
    return user?.roles[0]?.roleId;
  };

  export const getRole = (user: UserData | null) => {
    const id = getRoleId(user);

    if (id == 1) return "Read Only";
    else if (id == 2) return "Write";
    else if (id == 3) return "Admin";
    else return "Super Admin";
  };

 export const getFriendlyName = (str: string) => {
    var i,
      frags = str.split("_");
    for (i = 0; i < frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(" ");
  };

  export const getFirstTwoLetters = (name: string | undefined) => {
    if (!name) return "";

    const nameArr = name.split(" ");

    if (nameArr.length === 1) {
      return nameArr[0][0];
    }

    const firstName = nameArr[0];
    const secondName = nameArr[1];

    return `${firstName[0]}${secondName[0]}`;
  };
