import "../css/filter.css"
import { IoMdSchool } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi";
import { RiRestaurant2Fill } from "react-icons/ri";
import { MdStadium } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { IoMdFitness } from "react-icons/io";
import { MdMuseum } from "react-icons/md";
import { FaGasPump } from "react-icons/fa";
import { MdPark } from "react-icons/md";
import { BsFillAirplaneFill } from "react-icons/bs";
import { useState } from "react";



export const Filter = ({GetDataa}) => {
    return (
        <div className="desctopp">
            <h1 className="filterTitle">Filter</h1>

            <div className="wraper">
                <div className="leftSide">
                    <div className="filterJustOne">
                        <label htmlFor="shop">Shop:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 0)} id="shop" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <HiShoppingBag />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="restourant">Restaurant:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 1)} id="restourant" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <RiRestaurant2Fill />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="bussstop">Bus Stop:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 2)} id="bussstop" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <FaBus />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="museum">Museum:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 3)}  id="museum" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <MdMuseum />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="park">Park:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 4)} id="park" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <MdPark />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="rightSide">
                    <div className="filterJustOne">
                        <label htmlFor="school">School:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 5)} id="school" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <IoMdSchool />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="stadium">Stadium:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 6)} id="stadium" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <MdStadium />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="fitnesscenter">Fitness Center:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 7)} id="fitnesscenter" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <IoMdFitness />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="gass">Gas Station:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 8)} id="gass" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <FaGasPump />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="aerodrom">Airport:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 9)} id="aerodrom" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <BsFillAirplaneFill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const FilterMobile = ({GetDataa}) => {
    return (
        <div className="filterContainer mobile">
            <h1 className="filterTitle">Filter</h1>

            <div className="wraper">
                <div className="leftSide">
                    <div className="filterJustOne">
                        <label htmlFor="shop">Shop:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 0)} id="shop" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <HiShoppingBag />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="restourant">Restaurant:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 1)} id="restourant" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <RiRestaurant2Fill />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="bussstop">Bus Stop:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 2)} id="bussstop" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <FaBus />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="museum">Museum:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 3)}  id="museum" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <MdMuseum />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="park">Park:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 4)} id="park" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <MdPark />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="rightSide">
                    <div className="filterJustOne">
                        <label htmlFor="school">School:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 5)} id="school" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <IoMdSchool />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="stadium">Stadium:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 6)} id="stadium" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <MdStadium />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="fitnesscenter">Fitness Center:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 7)} id="fitnesscenter" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <IoMdFitness />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="gass">Gas Station:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 8)} id="gass" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <FaGasPump />
                            </div>
                        </div>
                    </div>

                    <div className="filterJustOne">
                        <label htmlFor="aerodrom">Airport:</label>
                        <br />
                        <div className="customInput">
                            <input onChange={event => GetDataa(event, 9)} id="aerodrom" defaultValue={0} className="inputNumber" type="number" />
                            <div className="SuperIconsNight">
                                <BsFillAirplaneFill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}