import {Footer} from "flowbite-react";

const CustomFooter = () => {
  return (
    <Footer container className="px-8 bg-aiesec-light-grey md:px-48 lg:px-72">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            alt="AIESEC Logo"
            href="https://aiesec.org"
            name=""
            src="/assets/images/bluelogo.png"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">
              About
            </Footer.Link>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider/>
        <Footer.Copyright
          by="AIESEC Sri Lanka™"
          href="#"
          year={2023}
        />
      </div>
    </Footer>
  );
}

export default CustomFooter;