class FavoritesController < ApplicationController
    before_action :authenticate_user

    def index 
        render json: Favorite.all, status: :ok
    end

    def show
        render json: find_favorite, status: :ok
    end

    def create 
        favorite = Favorite.create!(favorite_params)
        render json: favorite, status: :created
    end

    def destroy 
        favorite = find_favorite
        favorite.destroy 
        head :no_content
    end

    private

    def find_favorite 
        Favorite.find(params[:id])
    end

    def favorite_params
        params.require(:user_id, :policy_id)
    end
end
