class PoliciesController < ApplicationController
    before_action :authenticate_user

    def index 
        render json: Policy.all, status: :ok
    end

    def show
        render json: find_policy, status: :ok
    end

    def create 
        policy = Policy.create!(policy_params)
        render json: policy, status: :created
    end

    def destroy 
        policy = find_policy
        policy.destroy 
        head :no_content
    end

    private

    def find_policy 
        Policy.find(params[:id])
    end

    def policy_params
        params.permit(:state, :effective_year, :policy_type, :title, :law_citation, :database, :source, :title_description, :summary, :included)
    end
  

end
