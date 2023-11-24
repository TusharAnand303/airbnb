import prisma from '@/app/libs/prismadb';
import getCurrentUser from './getCurrentUser';

export default async function getFavoriteListings(){
    try{
        const currentUser = await getCurrentUser();
        if(!currentUser){
            return [];
        }

        const fav = prisma.listing.findMany({
            where:{
                id:{
                    in: [...(currentUser.favoriteIds || [])]
                }
            }
        });

       const safeFavorites = (await fav).map((favorite)=>({
        ...favorite,
        createdAt: favorite.createdAt.toISOString()
       }));
       return safeFavorites;
    }catch(error: any){
        throw new Error(error);
    }
}