
import { reverse } from "dns";
import React from "react";




export const Home = () => {
    let age: number = 26;
    let fname: string = "Tikva";
    let cometoclass: Boolean = true;
    let grads: number[] = [100, 80, 90];

    const welcome = (): void => { alert("welcome") }

    const showdata = (): void => {
        alert(`${fname} ${age} ${cometoclass} ${grads}`)
    }
    const longname = (fname: string): boolean => {
        if (fname.length > 4) {
            return true
        }
        return false

    }

    const yuongorold = (fname: string, age: number): string => {
        if (age > 15) {
            return fname;
        }
        return "not the class"
    }

    const alldata = (fname: string, lname: string, age: number = 0): string => {

        return `${fname} ${lname} ${age}`
    }

    const printallnames = (teachername: string, ...studentnames: string[]): void => {
        console.log(`${teachername},${studentnames}`)
    }

    const stam = (fname: string, lname?: string, grade: number = 60, ...friends: string[]): void => {
        if (lname) {
            console.log(`${fname} ${lname} ${grade} ${friends}`)
        }
        alert(`${fname} ${lname} ${grade} ${friends}`)
    }


    const bignum = (...nums: number[]): number => {
        let bignum: number = nums[0];
        for (let i: number = 0; i < nums.length; i++) {

            if (bignum < nums[i]) {
                bignum = nums[i];
            }
        }
        return bignum;
    }

    const fh = (name: string, ...nums: number[]): string => {
        let littlenum = nums[0];
        for (let i: number = 0; i < nums.length; i++) {
            if (littlenum > nums[i])
                littlenum = nums[i];

        }
        return `${name} ${littlenum}`
    }

    const gtfh = (name: string, ...names: string[]): boolean => {
        for (let i = 0; i < names.length; i++) {
            if (name == names[i] && names[i].indexOf(names[i])) {
                return true
            }
        }
        return false
    }

    const dcsf = (classs?: string, ...names: string[]): string => {
        if (classs) {
            names.sort()
        }
        return `${names.reverse()}`;
    }

    
    

    


    return (
        <div>
            <button onClick={() => { showdata() }}>click for data</button>
            {/* <button onClick={() => { longname("tikva") }}>true or false</button> */}
            {longname("tikva")}
            {yuongorold("tikva", 26)}
            {alldata("tikva", "yosef", 26)}
            {printallnames("tikva", "yuguy", "hygfyg", "gugj")}
            {/* {stam("tikva","vfjfj",15,"ffgctcj","gfhfh")} */}
            {bignum(4, 6, 10, 7)}
            {fh("tikva", 4, 7, 8)}
            {gtfh("tikva","tikva","yakov","tikva")}


        </div>
    )

}
