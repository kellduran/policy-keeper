class NoteSerializer < ActiveModel::Serializer
  attributes :id, :body
  has_one :user
end