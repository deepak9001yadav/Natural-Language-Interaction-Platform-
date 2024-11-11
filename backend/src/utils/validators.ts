import { NextFunction, Request, Response } from "express";
import { body, ValidationChain, validationResult } from "express-validator";

// Validation middleware to execute the validations
const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        
        return res.status(422).json({ errors: errors.array() });
    };
};

// Signup validator
const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password should contain at least 6 characters"),
];

export { validate, signupValidator };
