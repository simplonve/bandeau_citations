class BandeauController < ApplicationController
  def citations
  	t = rand(15)+1
  	@citation = Citation.find(t)
  end
end
