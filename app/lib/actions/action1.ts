'use server'

import { revalidateTag } from "@/node_modules/next/cache"

export default async function revalidate(){
    revalidateTag('todos');
}