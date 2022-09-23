class Favorite < ApplicationRecord
  belongs_to :user_id
  belongs_to :policy_id
end
