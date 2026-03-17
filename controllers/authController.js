import express from 'express';

export const registerUser = (req , res) => {
    try {
         const user = "ajay";
         return 0;
    } catch (error) {
        return res.status(500).json({success:false , message:'something went wrong.'})
    }
}