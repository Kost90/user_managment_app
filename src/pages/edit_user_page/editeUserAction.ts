import { redirect, json } from 'react-router-dom';
import { z } from 'zod';
import type { LoaderFunction } from 'react-router-dom';
import { store } from "@/store/store";
import { updateUser } from '@/store/feature/users/usersSlice';


const user = z.object({
  name: z.string().min(3, {message:'Name must be at least 3 characters long'}),
  hair: z.enum(['black', 'brown', 'blonde', 'red', 'grey'],{message:'Invalid hair value'}),
  eyes: z.enum(['brown', 'blue', 'green', 'grey'],{message:'Invalid eye value'}),
  gender: z.enum(['male', 'female'],{message:'Invalid gender value'}),
  glasses: z.enum(['glasses', 'no-glasses'],{message:'Invalid glasses value'}),
});

export const editUserAction = async ({ request, params }: Parameters<LoaderFunction>[number]) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  if (!params.id) throw new Error('No user ID provided');

  const validationResult = user.safeParse(updates);

  if (!validationResult.success) {
    return json({ errors: validationResult.error.flatten() }, { status: 400 });
  }

  const updatesWithID = {
    id:params.id,
    ...validationResult.data
  }

  await store.dispatch(updateUser({id: params.id,
    updates: updatesWithID,}))

  return redirect(`/users/userdetails/${params.id}`);
};
