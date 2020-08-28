import sale from "../Images/sale.jpg";
import facilities1 from "../Images/facilities1.jpg";
import facilities2 from "../Images/facilities2.jpg";
import facilities3 from "../Images/facilities3.jpg";
import facilities4 from "../Images/facilities4.jpg";
import facilities5 from "../Images/facilities5.jpg";
import facilities6 from "../Images/facilities6.jpg";
import trainerImg1 from "../Images/Trainers/1 (1).jpg";
import trainerImg2 from "../Images/Trainers/1 (2).jpg";
import trainerImg3 from "../Images/Trainers/1 (3).jpg";
import trainerImg4 from "../Images/Trainers/1 (4).jpg";
import trainerImg5 from "../Images/Trainers/1 (5).jpg";
import trainerImg6 from "../Images/Trainers/1 (6).jpg";
import people1 from "../Images/people1.jpg";
import people2 from "../Images/people2.jpg";
import people3 from "../Images/people3.jpg";
import people4 from "../Images/people4.jpg";
const initialState = {
  footer: [sale],
  facilities: [
    facilities1,
    facilities2,
    facilities3,
    facilities4,
    facilities5,
    facilities6,
  ],
  team: [
    { name: "katie Crewe", img: trainerImg1 },
    { name: "Ben Bruno", img: trainerImg2 },
    { name: "Jen Widerstrom", img: trainerImg3 },
    { name: "Joe Holder", img: trainerImg4 },
    { name: "Bret Contreras ", img: trainerImg5 },
    { name: "Mike Watkins", img: trainerImg6 },
  ],
  people: [
    {img :people1 , name :"Poppy Corby" },
    {img :people2 , name :"Jake Johnston" },
    {img :people3 , name :"Danial Mortiz" },
    {img :people4 , name :"Liza Soberano"}
    ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
export default reducer;
