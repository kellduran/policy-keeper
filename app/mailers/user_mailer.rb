class UserMailer < ApplicationMailer
  default from: 'policykeeper2022@gmail.com'
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.user_created.subject
  #
  def registration_confirmation(user)
    @user=user
    mail(:to=>"#{user.user_name} <#{user.user_email}>", subject:"Registration Confirmation")
end

end
