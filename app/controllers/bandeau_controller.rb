class BandeauController < ApplicationController
  def citations
  	@citation = Citation.first
  end
end
