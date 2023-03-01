import { defineStore } from "pinia";

export default defineStore("usuario", {
  state: () => ({
    email: "usuario@usuario.com",
    password: "123456",
    name: "Usuario",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYMa62z19XfXnODX6-HD_08TAO_Dj0USyRoh8ewedittk8iNv4P_rdMS4wQs3IdWRTDnM&usqp=CAU",
  }),
});
