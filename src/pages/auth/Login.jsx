import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    async function onSubmit(event) {
        event.preventDefault()
        setIsLoading(true)

        // TODO: Implement actual login logic
        setTimeout(() => {
            setIsLoading(false)
            toast("Logged in successfully")
        }, 1000)
    }

    const handleGoogleLogin = async () => {
        setIsLoading(true)
        // TODO: Implement Google login
        setTimeout(() => {
            setIsLoading(false)
            toast("Logged in with Google successfully")
        }, 1000)
    }

    return (
        <div className="flex h-screen flex-col items-center justify-center bg-gray-50 sm:px-0 px-4">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:max-w-sm bg-card shadow-lg sm:p-6 p-4 rounded-lg">
                <div className="flex flex-col space-y-2 text-center">
                    <Leaf className="mx-auto h-6 w-6" />
                    <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                    <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email or Phone</Label>
                            <Input
                                id="email"
                                placeholder="name@example.com"
                                type="text"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                disabled={isLoading}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    autoCapitalize="none"
                                    autoComplete="current-password"
                                    disabled={isLoading}
                                    required
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                                    ) : (
                                        <Eye className="h-4 w-4 text-muted-foreground" />
                                    )}
                                </Button>
                            </div>
                        </div>
                        <Button disabled={isLoading}>
                            {isLoading && (
                                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            )}
                            Sign In
                        </Button>
                    </div>
                </form>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">Or</span>
                    </div>
                </div>
                <div className="grid gap-4">
                    <Button variant="outline" type="button" disabled={isLoading} onClick={handleGoogleLogin}>
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        Continue with Google
                    </Button>
                </div>

                <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link to="/signup" className="underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}

