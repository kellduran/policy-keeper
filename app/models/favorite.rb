class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :policy

  validates :policy_id, uniqueness: {scope: :user_id, message: "Can't save the same policy twice"}
end
