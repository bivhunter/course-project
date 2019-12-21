export const mainTemplate = document.createElement('template');
mainTemplate.innerHTML = `
<style>
.main  {
    width: 600px;
    height: 600px;
    margin: 50px auto 0 auto;
    padding: 0;
    position: relative;
 }
 
 .tooltip-wrapper{
    width: 100%;
    height: 40px;
 }
</style>

	<div class=main>
		<div class="tooltip-wrapper">
		</div>
		<div class="app-wrapper">
		</div>
	</div>
`