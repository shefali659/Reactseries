function KeysDemo(){
	const list=[1,2,3,4,5]
	const listElements = list.map((id)=>{
return(
<>
<h1>KeysDemo</h1>
<li key={id.toString()}>
  {id}
</li>
</>
)
})
}
export default KeysDemo;