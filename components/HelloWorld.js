import Link from "next/link";

function HelloWorld(props) {
    return (
        <div>
            Hello world
            <p>scoped!</p>
            <Link href = "/"><a>Back</a></Link>
            <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
            {/*<style global jsx>{`*/}
        {/*body {*/}
          {/*background: black;*/}
        {/*}*/}
      {/*`}</style>*/}
        </div>
    )
}

export default HelloWorld