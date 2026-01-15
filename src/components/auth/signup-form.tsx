"use client";

import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import Icons from "../global/icons";
import { FADE_IN_VARIANTS } from "@/constants";
import { toast } from "sonner";
import LoadingIcon from "../ui/loading-icon";


const SignUpForm = () => {

    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            toast.error("Please fill all fields");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        if (password.length < 8) {
            toast.error("Password must be at least 8 characters");
            return;
        }

        setIsLoading(true);

        try {
            // Simular signup - Solo frontend
            toast.success("Account created successfully!");
            router.push("/");
        } catch (error) {
            console.error(error);
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col text-center w-full">
            <motion.div
                variants={FADE_IN_VARIANTS}
                animate="visible"
                initial="hidden"
            >
                <div className="flex justify-center">
                    <Link href="/">
                        <Icons.icon className="w-8 h-8" />
                    </Link>
                </div>
                <h1 className="text-2xl text-center mt-4">
                    Create your account
                </h1>
                <p className="text-sm text-muted-foreground mt-2">
                    Join Luro and start managing your social media
                </p>
            </motion.div>

            <div>
                <motion.form
                    variants={FADE_IN_VARIANTS}
                    animate="visible"
                    initial="hidden"
                    onSubmit={handleSubmit}
                    className="py-8 w-full flex flex-col gap-4"
                >
                    <div className="w-full">
                        <Input
                            autoFocus
                            name="email"
                            type="email"
                            value={email}
                            disabled={isLoading}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="w-full"
                        />
                    </div>
                    <div className="w-full">
                        <Input
                            name="password"
                            type="password"
                            value={password}
                            disabled={isLoading}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full"
                        />
                    </div>
                    <div className="w-full">
                        <Input
                            name="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            disabled={isLoading}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            className="w-full"
                        />
                    </div>
                    <div className="w-full">
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full"
                        >
                            {isLoading ? <LoadingIcon size="sm" className="mr-2" /> : "Sign Up"}
                        </Button>
                    </div>
                </motion.form>

                <div className="text-muted-foreground text-sm">
                    <span>Already have an account?</span> <Link href="/auth/signin" className="text-foreground font-semibold">Sign In</Link>
                </div>
            </div>
        </div>
    )
};

export default SignUpForm
