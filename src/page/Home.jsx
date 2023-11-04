import Container from "../components/ui/Container";


const Home = () => {
  return (
      <Container>
    <div className="flex my-10">
        <div  className="space-y-3 flex-[-1]">
        <div className="space-y-10">
        <div>
    <h1 className="text-6xl mb-5">Quality Cleanings <span className="text-primary">for Your Home</span></h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sunt magni animi at architecto, repellat nesciunt perspiciatis nulla temporibus unde?</p>
        </div>
        <div>
    <button className="btn btn-primary">Book a service</button>
    <button className="btn btn-ghost">Read More</button>
        </div>
        <div className="divider"></div>
        <div>
        <div className="avatar-group -space-x-6">
  <div className="avatar">
    <div className="w-12">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww" />
    </div>
  </div>
</div>
        </div>
      </div>
      <p>Rated 5 Out of our all clients</p>
        </div>
        
        <div className="flex-[-1] h-[600px] object-cover rounded-md">
            <img className="overflow-hidden w-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww" alt="" />
        </div>
      </div>
      </Container>
  );
};

export default Home;
