class User < ApplicationRecord
    has_secure_password
    before_create :confirm_token

  has_many :favorites, dependent: :destroy
  has_many :policies, through: :favorites

 has_many :notes

  validates :user_name, presence: true, uniqueness: { case_sensitve: false, message: "This username is already taken, please choose another" }, length: { minimum: 3 }

  validates :user_email, presence: true
 

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
