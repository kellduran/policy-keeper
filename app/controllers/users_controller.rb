class UsersController < ApplicationController
   skip_before_action :authenticate_user, only: [:create, :confirm_email]
    
   
    def show
        render json: current_user, status: :ok
    end

   

    def create 
        @user = User.new(user_params)
         if @user.save
            UserMailer.registration_confirmation(@user).deliver_later
            render json: {message: "Created check email to finish registration"}, status: :ok 
        else 
            render json: @user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :ok
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    def confirm_email
        user = User.find_by(confirmation_token: params[:id])
        if user
          user.update!(confirmation_token:"", email_validated: true)
        #   redirect_to "/"
          render json: "Welcome to Policy Keeper! Your email has been confirmed. Please sign in to continue."
        #     redirect_to "/login"
        else
          render json: "Sorry. This token is not active."
        end
    end

    private

    def user_params
        params.require(:user).permit(:user_email, :user_name, :password, :password_digest, :email_validated, :is_admin
        )
    end
end
