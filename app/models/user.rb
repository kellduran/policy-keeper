class User < ApplicationRecord
    has_secure_password
    before_create :confirm_token

  has_many :favortites, dependent: :destroy
  has_many :policies, through: :favorites

 
  def confirm_token 
    if self.confirmation_token.blank?
        self.confirmation_token = SecureRandom.urlsafe_base64.to_s
    end
  end
  # def email_activate
  #   self.email_confirmed = true
  #   self.confirm_token = nil
  #   save!(:validate => false)
  # end

  
end
