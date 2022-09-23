class SessionsController < ApplicationController

  skip_before_action :authenticate_user, only: [:create]

  #POST '/login'
  def create
    user = User.find_by(user_name: params[:user_name])
    if user&.authenticate(params[:password])
      if user.email_validated
        session[:user_id] = user.id
        render json: user, status: :ok
      else 
        render json:{errors:"Email has yet to be validated"}, status: :unauthorized
      end 
    else    
      render json: "Invalid Credentials", status: :unauthorized
    end
  end

  #DELETE '/logout'
  def destroy
    session.delete :user_id
        head :no_content
  end
end
