class FavoritesController < ApplicationController
     before_action :authenticate_user

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
        #use update to make the current user_id " " which should remove the association between policy and user for a particular user but not effect other user's favoriting of same policy
    end

    private

    def favorite_policies
        User.find(params[:id]).policies
    end

    def find_favorite 
        Favorite.find(params[:id])
    end

    def favorite_params
        params.permit(:user_id, :policy_id)
    end
end
