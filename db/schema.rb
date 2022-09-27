# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_27_013831) do

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "policy_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["policy_id"], name: "index_favorites_on_policy_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "policies", force: :cascade do |t|
    t.string "state"
    t.integer "effective_year"
    t.string "policy_type"
    t.string "title"
    t.string "law_citation"
    t.string "database"
    t.string "source"
    t.string "title_description"
    t.string "summary"
    t.boolean "included"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "user_email", null: false
    t.string "user_name", null: false
    t.string "password_digest", null: false
    t.string "confirmation_token"
    t.boolean "email_validated", default: false
    t.boolean "is_admin", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "favorites", "policies"
  add_foreign_key "favorites", "users"
end
