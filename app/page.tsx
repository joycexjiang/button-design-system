import { NavButton } from "@/components/nav-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] p-8">
      <div className="max-w-3xl mx-auto space-y-12">
        
        <section className="space-y-4">
          <h1 className="text-3xl font-bold text-black">Navigation buttons</h1>
          <p className="text-gray-700">
            Navigation buttons are used for primary actions, HUD-style interfaces, and secondary actions. 
            They come in three variants: primary, HUD, and secondary.
          </p>
        </section>

        {/* props doc */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium text-black">Props</h2>
          <div className="border rounded-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Prop</th>
                  <th className="px-4 py-2 text-left">Type</th>
                  <th className="px-4 py-2 text-left">Default</th>
                  <th className="px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t">
                  <td className="px-4 py-2 font-mono">variant</td>
                  <td className="px-4 py-2 font-mono">
                    &quot;primary&quot; | &quot;hud&quot; | &quot;secondary&quot;
                  </td>
                  <td className="px-4 py-2 font-mono">
                    &quot;primary&quot;
                  </td>
                  <td className="px-4 py-2">
                    The visual style variant of the button
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 font-mono">className</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">Additional CSS classes to apply</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* primary buttons */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium text-black">Primary buttons</h2>
            <p className="text-gray-700">
              Primary buttons use a metallic gradient style with a chrome text effect. 
              The pressed state shows a darker gradient with an inset shadow.
            </p>
            <p className="text-sm text-gray-600">Press the button to see the active state</p>
          </div>
          
            <div className="flex gap-2">
              
              <NavButton>Next</NavButton>
          
            <NavButton>Cancel</NavButton>
            </div>
          
          <div className="bg-white p-4 rounded-md">
            <pre className="text-sm text-gray-700">
              <code>{`<NavButton>Next</NavButton>
<NavButton>Cancel</NavButton>`}</code>
            </pre>
          </div>
        </section>

        {/* hud buttons */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium text-black">HUD buttons</h2>
            <p className="text-gray-700">
              HUD-style buttons feature a translucent background with blur effect.
              The pressed state shows an inset shadow effect.
            </p>
            <p className="text-sm text-gray-600">Press the button to see the active state</p>
          </div>
          <div className="flex gap-2">
            <NavButton variant="hud">Next</NavButton>
            <NavButton variant="hud">Cancel</NavButton>
          </div>
          <div className="bg-white p-4 rounded-md">
            <pre className="text-sm text-gray-700">
              <code>{`<NavButton variant="hud">Next</NavButton>
<NavButton variant="hud">Cancel</NavButton>`}</code>
            </pre>
          </div>
        </section>

        {/* secondary buttons */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium text-black">Secondary buttons</h2>
            <p className="text-gray-700">
              Secondary buttons use a subtle style for less prominent actions.
              The pressed state shows a slightly darker background with an inset shadow.
            </p>
            <p className="text-sm text-gray-600">Press the button to see the active state</p>
          </div>
          <div className="flex gap-2">
            <NavButton variant="secondary">Next</NavButton>
            <NavButton variant="secondary">Cancel</NavButton>
          </div>
          <div className="bg-white p-4 rounded-md">
            <pre className="text-sm text-gray-700">
              <code>{`<NavButton variant="secondary">Next</NavButton>
<NavButton variant="secondary">Cancel</NavButton>`}</code>
            </pre>
          </div>
        </section>

        
      </div>
    </div>
  )
}

