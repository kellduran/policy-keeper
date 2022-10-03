class FavoritesController < ApplicationController
    

    def index 
        render json: Favorite.all, status: :ok
    end

    def show
        render json: favorite_policies, status: :ok
    end

    def create 
        favorite = Favorite.create!(favorite_params)
        render json: favorite, status: :created
    end

    def update 
        find_favorite.update!(favorite_params)
        render json: favorite_policies, status: :ok
    end

    def destroy
        # favorite_to_destroy=current_user.favorites.find_by(policy: Policy.find(params[:id]))
        # favorite_to_destroy.destroy 
        favorite= Favorite.find(params[:id])
        favorite.destroy
        head :no_content
    end

    private

    def favorite_policies
        User.find(params[:id]).policies
    end

    def find_favorite 
        Favorite.find(params[:id])
    end

    def favorite_params
        params.require(:favorite).permit(:user_id, :policy_id)
    end
end
