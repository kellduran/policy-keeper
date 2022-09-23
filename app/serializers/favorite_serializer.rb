class FavoriteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user_id
  has_one :policy_id
end
