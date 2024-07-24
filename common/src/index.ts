import zod from "zod"

export const signupSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    name: zod.string().optional(),
})
export const signinSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
})

export const createBlogPost = zod.object({
    title: zod.string().min(1),
    content: zod.string().min(1),
})  

export const updateBlogPost = zod.object({
    title: zod.string().min(1),
    content: zod.string().min(1),
    id: zod.number()    
})

// zod --infer for frontend----------------------------------
export type SignupSchema = zod.infer<typeof signupSchema>
export type SigninSchema = zod.infer<typeof signinSchema>
export type CreateBlogPost = zod.infer<typeof createBlogPost>
export type UpdateBlogPost = zod.infer<typeof updateBlogPost>