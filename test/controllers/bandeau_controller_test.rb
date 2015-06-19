require 'test_helper'

class BandeauControllerTest < ActionController::TestCase
  test "should get citations" do
    get :citations
    assert_response :success
  end

end
