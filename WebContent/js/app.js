

function search(){
	
	$.ajax({
		  url: this.href,
		  type: "POST",
		  data: "query=$('#query')",
		  success:function(){ $("#output").html("done")  }
		});
		
	
}
