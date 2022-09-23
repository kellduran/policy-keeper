class UsersController < ApplicationController

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: {error: "No current session strored"}, status: :unauthorized
        end
    end

    def create 
        @user = User.new(user_params)
         if @user.save
            UserMailer.registration_confirmation(@user).deliver_later
            render json: {message: "Created check email to finish registration"}, status: :ok 
        else 
            render json: user.errors.full_messages, status: :unprocessable_enitity
        end
    end

    def confirm_email
        user = User.find_by(confirmation_token: params[:id])
        if user
          user.update!(confirmation_token:"", email_validated:true)
          redirect_to "/"
        #   render json: "Welcome to Policy Keeper! Your email has been confirmed. Please sign in to continue."
        #     redirect_to "/login"
        else
          render json: "Sorry. This token is not active."
        end
    end

    private

    def user_params
        params.permit(:user_email, :user_name, :password, :password_digest, :user, :email_validated
        )
    end
end
